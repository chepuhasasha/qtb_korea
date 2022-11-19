import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from 'src/configs/mongo.config';
import { TournamentsModule } from '../tournaments/tournaments.module';
import { AuthorizationModule } from '../authorization/authorization.module';
import { AccountantModule } from '../accountant/accountant.module';
import { AdminsModule } from '../admins/admins.module';
import { PlayersModule } from '../players/players.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/guards/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthorizationModule,
    AccountantModule,
    AdminsModule,
    PlayersModule,
    TournamentsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AppService,
  ],
})
export class AppModule {}
