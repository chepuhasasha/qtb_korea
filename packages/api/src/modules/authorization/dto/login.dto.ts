import { ApiProperty } from '@nestjs/swagger';
import { ILogin } from '@tournaments/types';

export class LoginDto implements ILogin {
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
