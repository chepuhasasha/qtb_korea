import { ApiProperty } from '@nestjs/swagger';
import { ITournamentTime } from '@tournaments/types';

export class TournamentTimeDTO implements ITournamentTime {
  @ApiProperty({ description: 'Start' })
  start: number;
  @ApiProperty({ description: 'End' })
  end: number;
  @ApiProperty({ description: 'Notification' })
  notification: number;
}
