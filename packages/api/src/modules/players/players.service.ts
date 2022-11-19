import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayerRegisterDto } from './dto/register.dto';
import {
  Player,
  PlayerDocument,
  PlayerProgress,
  PlayerProgressDocument,
} from './players.schema';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
    @InjectModel(PlayerProgress.name)
    private playerProgressModel: Model<PlayerProgressDocument>,
  ) {}

  async register({ username, player_id, tournament_id }: PlayerRegisterDto) {
    let player = await this.playerModel.findOne({ player_id, username });
    if (player) {
      if (player.tournaments.includes(tournament_id)) {
        return player;
      }
    } else {
      player = await this.playerModel.create({
        username,
        player_id,
        tournaments: [tournament_id],
        progress: [],
      });
    }
    const progress = await this.playerProgressModel.create({
      player_id,
      tournament_id,
      points: 0,
      max_bet: 0,
      max_win: 0,
    });
    const updatedPlayer = await this.playerModel.findOneAndUpdate(
      { _id: player._id },
      {
        tournaments: [...player.tournaments, tournament_id],
        progress: [...player.progress, progress._id],
      },
    );
    return updatedPlayer;
  }

  async getProgress(player_id: string, tournament_id: string) {
    const progress = await this.playerProgressModel.findOne({
      player_id,
      tournament_id,
    });
    return progress ? progress : null;
  }

  async getPlayer(player_id: string) {
    const player = await this.playerModel.findOne({ player_id });
    return player ? player : null;
  }

  async getExtendedPlayer(player_id: string) {
    const player = await this.getPlayer(player_id);
    if (player) {
      const progress = await this.playerProgressModel.find({ player_id });
      if (progress) {
        return {
          ...player,
          progress,
        };
      }
      return player;
    }
    return null;
  }
}
