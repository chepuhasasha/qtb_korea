import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import appConfig from 'src/configs/app.config';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;

    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) return false;

    const token = request.headers.authorization.slice(7);
    let role = '-';
    jwt.verify(token, appConfig().appSecret, (err, payload) => {
      if (!err && payload && payload.role) {
        role = payload.role;
      }
    });
    if (roles.includes(role) || role === 'root') {
      return true;
    }
    return false;
  }
}
