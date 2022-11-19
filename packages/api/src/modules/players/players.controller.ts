import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayerRegisterDto } from './dto/register.dto';
import { PlayersService } from './players.service';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Post('/register')
  async register(@Body() registerDto: PlayerRegisterDto) {
    const player = await this.playerService.register(registerDto);
    return player
      ? { message: 'Player successfully registered!' }
      : { message: 'Something went wrong...' };
  }

  @Get('/original/:player_id')
  async player(@Param('player_id') id: string) {
    const player = await this.playerService.getPlayer(id);
    return player ? player : { message: 'Player not a found.' };
  }

  @Get('/extended/:player_id')
  async extendedPlayer(@Param('player_id') id: string) {
    const player = await this.playerService.getExtendedPlayer(id);
    return player ? player : { message: 'Player not a found.' };
  }

  @Get('/progress')
  async progress(
    @Query('player_id') player_id: string,
    @Query('tournament_id') tournament_id: string,
  ) {
    const progress = await this.playerService.getProgress(
      player_id,
      tournament_id,
    );
    return progress ? progress : { message: 'Progress not a found.' };
  }
}
