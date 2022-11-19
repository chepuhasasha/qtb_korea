import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './players.controller';
import {
  Player,
  PlayerProgress,
  PlayerProgressSchema,
  PlayerSchema,
} from './players.schema';
import { PlayersService } from './players.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
    MongooseModule.forFeature([
      { name: PlayerProgress.name, schema: PlayerProgressSchema },
    ]),
  ],
  controllers: [PlayersController],
  exports: [PlayersService],
  providers: [PlayersService],
})
export class PlayersModule {}
