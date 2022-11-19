import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthorizationService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
