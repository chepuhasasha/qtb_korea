export interface IPlayer {
    username: string;
    player_id: string;
    tournaments: string[];
    progress: string[];
}
export interface IPlayerProgress {
    player_id: string;
    tournament_id: string;
    points: number;
    max_bet: number;
    max_win: number;
}
export interface IPlayerRegisterDto {
    username: string;
    player_id: string;
    tournament_id: string;
}
