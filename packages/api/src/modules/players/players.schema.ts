import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IPlayer, IPlayerProgress } from '@tournaments/types';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;
export type PlayerProgressDocument = HydratedDocument<PlayerProgress>;

@Schema()
export class Player implements IPlayer {
  @Prop()
  username: string;
  @Prop()
  player_id: string;
  @Prop({ type: [String] })
  tournaments: string[];
  @Prop({ type: [String] })
  progress: string[];
}

@Schema()
export class PlayerProgress implements IPlayerProgress {
  @Prop()
  player_id: string;
  @Prop()
  tournament_id: string;
  @Prop()
  points: number;
  @Prop()
  max_bet: number;
  @Prop()
  max_win: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
export const PlayerProgressSchema =
  SchemaFactory.createForClass(PlayerProgress);
