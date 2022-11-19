import { ApiProperty } from '@nestjs/swagger';
import { ITournamentConfig } from '@tournaments/types';

export class TournamentConfigDTO implements ITournamentConfig {
  @ApiProperty({ description: 'Game ID' })
  game: string;

  @ApiProperty({ description: 'Game room ID' })
  game_room: string;

  @ApiProperty({ description: 'Algorithm' })
  algorithm: string;
}
