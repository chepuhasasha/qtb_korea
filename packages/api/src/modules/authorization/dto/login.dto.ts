import { ApiProperty } from '@nestjs/swagger';
import { ILogin } from '@qtb_korea/types';

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
