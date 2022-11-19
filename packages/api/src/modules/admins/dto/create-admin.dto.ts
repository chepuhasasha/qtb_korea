import { ApiProperty } from '@nestjs/swagger';
import { IAdminCreate } from '@tournaments/types';

export class CreateAdminDto implements IAdminCreate {
  @ApiProperty({
    description: 'User name.',
    default: 'John',
  })
  username: string;

  @ApiProperty({
    description: 'User password.',
    default: 'qwerty123',
  })
  password: string;

  @ApiProperty({
    description: 'User role.',
    default: 'admin',
  })
  role: IAdminCreate['role'];
}
