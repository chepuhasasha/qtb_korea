import { ApiProperty } from '@nestjs/swagger';
import { ITournamentTerms } from '@tournaments/types';

export class TournamentTermsDTO implements ITournamentTerms {
  @ApiProperty({ description: 'Min BET' })
  min_bet: number;
}
