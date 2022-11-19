import { ApiProperty } from '@nestjs/swagger';
import { ITournamentPermissions } from '@tournaments/types';

export class TournamentPermissionsDTO implements ITournamentPermissions {
  @ApiProperty({ description: 'Public' })
  public: boolean;

  @ApiProperty({ description: 'Owners list' })
  owners: string[];

  @ApiProperty({ description: 'Editors list' })
  editors: string[];
}
