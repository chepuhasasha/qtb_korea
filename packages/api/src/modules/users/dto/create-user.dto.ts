import { ApiProperty } from '@nestjs/swagger';
import { IUserCreate } from '@qtb_korea/types';

export class CreateUserDTO implements IUserCreate {
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
}
