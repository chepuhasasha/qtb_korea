import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import appConfig from 'src/configs/app.config';
import { AuthorizationService } from '../authorization.service';
import * as Extractor from 'passport-jwt-cookie-extractor';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(private authServece: AuthorizationService) {
    super({
      ignoreExpiration: true,
      requestIdleCallback: true,
      secretOrKey: appConfig().appSecret,
      jwtFromRequest: Extractor.fromCookie('refresh'),
    });
  }

  async validate(payload: {
    username: string;
    user_id: string;
    role: string;
    refresh_token: string;
  }) {
    const data = await this.authServece.validateRefresh(
      payload.user_id,
      payload.username,
      payload.refresh_token,
    );
    if (!data) throw new BadRequestException();
    return {
      id: payload.user_id,
      username: payload.username,
      role: payload.role,
    };
  }
}
