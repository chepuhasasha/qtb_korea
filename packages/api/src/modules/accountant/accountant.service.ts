import { Injectable } from '@nestjs/common';
import { TournamentDocument } from 'src/modules/tournaments/tournaments.schema';
import { TournamentsService } from 'src/modules/tournaments/tournaments.service';
import { BetDto } from './dto/bet.dto';
import { WinDto } from './dto/win.dto';

@Injectable()
export class AccountantService {
  constructor(private tournamentsService: TournamentsService) {}

  async addBet(bet: BetDto) {
    // 1. Найти турнир
    // 2. Найти игрока
    // 2. Записать бет игроку
    return bet;
  }

  async addWin(win: WinDto) {
    // 1. Найти турнир
    // 2. Найти игрока
    // 3. Найти бет этого вина у игрока
    // 4. расчитать очки: const points = await this.calculatePoints()
    // 5. присвоить игроку
    // 6. отправить событие обнавления (ws) leaderboard игроку
    return win;
  }

  async findTournament(game: string, game_room: string) {
    const tournament = this.tournamentsService.find({
      'config.game': game,
      'config.game_room': game_room,
    })[0];
    // может быть несколько
    return tournament ? tournament : null;
  }

  async calculatePoints(tournament: TournamentDocument, win: any, bet: any) {}

  // async someTournamentType() - метод расчета очков для типа турнира
}
