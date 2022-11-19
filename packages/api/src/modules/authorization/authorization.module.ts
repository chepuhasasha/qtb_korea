import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from 'src/configs/jwt.config';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthorizationController } from './authorization.controller';
import { AuthData, AuthSchema } from './authorization.schema';
import { AuthorizationService } from './authorization.service';
import { ApiKeyStrategy } from './strategies/api-key.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    MongooseModule.forFeature([{ name: AuthData.name, schema: AuthSchema }]),
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [AuthorizationController],
  providers: [
    AuthorizationService,
    ApiKeyStrategy,
    JwtStrategy,
    RefreshStrategy,
    LocalStrategy,
  ],
  exports: [AuthorizationService],
})
export class AuthorizationModule {}
