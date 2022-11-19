import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import type {
  ITournament,
  ITournamentConfig,
  ITournamentInfo,
  ITournamentPermissions,
  ITournamentPrize,
  ITournamentTerms,
  ITournamentTime,
  PrizeType,
} from '@tournaments/types';

@Schema()
export class TournamentPrize implements ITournamentPrize {
  @Prop()
  type: PrizeType;
  @Prop()
  value: number;
  @Prop()
  string_value: string;
  @Prop()
  position: number;
  @Prop()
  winner: string;
}

@Schema()
export class TournamentInfo implements ITournamentInfo {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  rules: string;
  @Prop()
  baner: string;
  @Prop({ type: MSchema })
  prizes: TournamentPrize[];
}

@Schema()
export class TournamentConfig implements ITournamentConfig {
  @Prop()
  game: string;
  @Prop()
  game_room: string;
  @Prop()
  algorithm: string;
}

@Schema()
export class TournamentTime implements ITournamentTime {
  @Prop()
  start: number;
  @Prop()
  end: number;
  @Prop()
  notification: number;
}

@Schema()
export class TournamentTerms implements ITournamentTerms {
  @Prop()
  min_bet: number;
}

@Schema()
export class TournamentPermissions implements ITournamentPermissions {
  @Prop()
  public: boolean;
  @Prop()
  owners: string[];
  @Prop()
  editors: string[];
}

@Schema()
export class Tournament implements ITournament {
  @Prop({ type: MSchema })
  info: TournamentInfo;
  @Prop({ type: MSchema })
  config: TournamentConfig;
  @Prop({ type: MSchema })
  time: TournamentTime;
  @Prop({ type: MSchema })
  terms: TournamentTerms;
  @Prop({ type: MSchema })
  permissions: TournamentPermissions;
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);
export type TournamentDocument = HydratedDocument<Tournament>;
