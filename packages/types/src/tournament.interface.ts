export type PrizeType = 'freeSpins' | 'fixCash' | 'progessiveCash' | 'customText'

export interface ITournamentPrize {
  type: PrizeType;
  value: number | null;
  string_value: string | null;
  position: number | null;
  winner: string | null;
}

export interface ITournamentInfo {
  title: string;
  description: string;
  rules: string;
  baner: string;
  prizes: ITournamentPrize[];
}

export interface ITournamentConfig {
  game: string;
  game_room: string;
  algorithm: string;
}

export interface ITournamentTime {
  start: number;
  end: number;
  notification: number;
}

export interface ITournamentTerms {
  min_bet: number;
}

export interface ITournamentPermissions {
  public: boolean
  owners: string[];
  editors: string[];
}

export interface ITournament{
  info: ITournamentInfo
  config: ITournamentConfig
  time: ITournamentTime
  terms: ITournamentTerms
  permissions: ITournamentPermissions
  // localization: ITournamentLocalMap
}


export interface ITournamentLocal {
  tournament_id: string
  lang: string // - ru
  map: ITournament['info']
}

export interface ITournamentLocalMap {
  ru: string // - id карты
  en: string // - id карты
  // ...
}

export interface ITournamentExtended extends ITournament {
  _id: string;
}