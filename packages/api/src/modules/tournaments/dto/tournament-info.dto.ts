import { ApiProperty } from '@nestjs/swagger';
import { ITournamentInfo } from '@tournaments/types';
import { TournamentPrizeDTO } from './tournament-prize.dto';

export class TournamentInfoDTO implements ITournamentInfo {
  @ApiProperty({
    description: 'Title',
    default: 'My best tournament!',
  })
  title: string;
  @ApiProperty({
    description: 'Description',
    default: 'My best tournament description!',
  })
  description: string;
  @ApiProperty({
    description: 'Rules',
    default: 'My best tournament rules!',
  })
  rules: string;
  @ApiProperty({
    description: 'Title',
    default: '/image.png',
  })
  baner: string;

  @ApiProperty({
    description: 'Prizes',
    type: [TournamentPrizeDTO],
  })
  prizes: TournamentPrizeDTO[];
}
