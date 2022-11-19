import { ApiProperty } from '@nestjs/swagger';
import { ITournamentPrize, PrizeType } from '@tournaments/types';

export class TournamentPrizeDTO implements ITournamentPrize {
  @ApiProperty({
    description:
      'Type: ["freeSpins" | "fixCash" | "progessiveCash" | "customText"]',
    default: 'freeSpins',
  })
  type: PrizeType;
  @ApiProperty({
    description: 'Value',
    default: 100,
  })
  value: number | null;
  @ApiProperty({
    description: 'String value',
    default: null,
  })
  string_value: string | null;
  @ApiProperty({
    description: 'Position',
    default: null,
  })
  position: number | null;
  @ApiProperty({
    description: 'Value',
    default: null,
  })
  winner: string | null;
}
