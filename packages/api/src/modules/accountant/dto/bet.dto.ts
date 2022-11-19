import { ApiProperty } from '@nestjs/swagger';

export class BetDto {
  @ApiProperty({
    description: 'Transaction id on Endorphina server side',
    default: 0,
  })
  id: number;

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
