import { Module } from '@nestjs/common';
import { TournamentsModule } from 'src/modules/tournaments/tournaments.module';
import { AccountantController } from './accountant.controller';
import { AccountantService } from './accountant.service';

@Module({
  imports: [TournamentsModule],
  controllers: [AccountantController],
  exports: [AccountantService],
  providers: [AccountantService],
})
export class AccountantModule {}
