import { ApiProperty } from '@nestjs/swagger';
import { IPlayerRegisterDto } from '@tournaments/types';

export class PlayerRegisterDto implements IPlayerRegisterDto {
  @ApiProperty({
    description: 'Player username.',
    default: 'lucky777',
  })
  username: string;

  @ApiProperty({
    description: 'Player id.',
    default: 'somePlayerID',
  })
  player_id: string;
  @ApiProperty({
    description: 'Tournament id.',
    default: 'someTournamentID',
  })
  tournament_id: string;
}
