import { ApiProperty } from '@nestjs/swagger';

export class WinDto {
  @ApiProperty({
    description: 'Transaction id on Endorphina server side',
    default: 0,
  })
  id: number;

  @ApiProperty({
    description:
      'Identifier of the game session where bet has been placed (differs from the token if game has been interrupted and restored later).',
    default: 'token123',
  })
  betSessionId: string;

  @ApiProperty({
    description: 'Bet transaction id sent earlier with /bet request',
    default: '1',
  })
  betTransactionId: number;

  @ApiProperty({
    description: 'Bet amount, in thousandths of money units',
    default: '1',
  })
  amount: number;

  @ApiProperty({
    description:
      'Session currency, ISO code, that integrator responded to /session request',
    default: 'EUR',
  })
  currency: string;

  @ApiProperty({
    description: 'Unix timestamp',
    default: '1',
  })
  date: number;

  @ApiProperty({
    description:
      'Game (content) id that integrator responded to /session request.',
    default: 'test',
  })
  game: string;

  @ApiProperty({
    description:
      'Game round id within current game session, starts with value = 1.',
    default: 1,
  })
  gameId: number;

  @ApiProperty({
    description:
      'Session player, that integrator responded to /session request.',
    default: 'user777',
  })
  player: string;

  @ApiProperty({
    description: 'Optional, true if jackpot has been won',
    default: false,
  })
  progressive: boolean;

  @ApiProperty({
    description: 'Optional, jackpot friendly name',
    default: 'test',
  })
  progressiveDesc: 'Optional, jackpot friendly name';

  @ApiProperty({
    description: 'Game session identifier',
    default: 'token123',
  })
  token: string;

  @ApiProperty({
    description:
      'Sha1Hex signature of request parameter values ordered alphabetically by name and Merchant private key.',
    default: 'token123',
  })
  sign: string;
}
