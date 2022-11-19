import { ApiProperty } from '@nestjs/swagger';
import type { ITournament } from '@tournaments/types';
import { TournamentInfoDTO } from './tournament-info.dto';
import { TournamentTimeDTO } from './tournament-time.dto';
import { TournamentConfigDTO } from './tournament-config.dto';
import { TournamentTermsDTO } from './tournament-terms.dto';
import { TournamentPermissionsDTO } from './tournament-permissions.dto';

export class CreateTournamentDto implements ITournament {
  @ApiProperty({ description: 'Info' })
  info: TournamentInfoDTO;

  @ApiProperty({ description: 'Time' })
  time: TournamentTimeDTO;

  @ApiProperty({ description: 'Config' })
  config: TournamentConfigDTO;

  @ApiProperty({ description: 'Terms' })
  terms: TournamentTermsDTO;

  @ApiProperty({ description: 'Permissions' })
  permissions: TournamentPermissionsDTO;
}
