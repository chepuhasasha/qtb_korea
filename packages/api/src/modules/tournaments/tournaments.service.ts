import { IAdminData } from '@tournaments/types';
import { Injectable } from '@nestjs/common';
import { Tournament, TournamentDocument } from './tournaments.schema';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types, Document } from 'mongoose';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectModel(Tournament.name)
    private tournamentModel: Model<TournamentDocument>,
  ) {}

  async create(t: CreateTournamentDto) {
    return await this.tournamentModel.create(t);
  }

  async find(
    condition: FilterQuery<
      Document<unknown, any, Tournament> &
        Tournament & {
          _id: Types.ObjectId;
        }
    >,
  ) {
    return await this.tournamentModel.find(condition);
  }

  async all() {
    return await this.tournamentModel.find({});
  }

  async findByID(id: string) {
    return await this.tournamentModel.findById(id);
  }

  async update(
    _id: string,
    updateTournamentDto: UpdateTournamentDto,
    user: IAdminData,
  ) {
    if (user.role === 'root') {
      return await this.tournamentModel.findOneAndUpdate(
        { _id },
        updateTournamentDto,
        {
          new: true,
        },
      );
    } else {
      return await this.tournamentModel.findOneAndUpdate(
        { _id, 'permissions.owners': [user.id] },
        updateTournamentDto,
        {
          new: true,
        },
      );
    }
  }

  async remove(_id: string, user: IAdminData) {
    if (user.role === 'root') {
      return await this.tournamentModel.findOneAndRemove({ _id });
    } else {
      return await this.tournamentModel.findOneAndRemove({
        _id,
        'permissions.owners': [user.id],
      });
    }
  }
}
