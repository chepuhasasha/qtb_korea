import { Post, Body, Controller, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccountantService } from './accountant.service';
import { BetDto } from './dto/bet.dto';
import { WinDto } from './dto/win.dto';

@ApiTags('Accountant')
@Controller('accountant')
export class AccountantController {
  constructor(private readonly accountantService: AccountantService) {}

  @Post('/bet')
  @ApiSecurity('X-TOURNAMENTS-KEY', ['X-TOURNAMENTS-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async bet(@Body() betDto: BetDto) {
    const result = await this.accountantService.addBet(betDto);
    return result
      ? { message: 'Bet accepted!' }
      : { message: 'Something went wrong...' };
  }

  @Post('/win')
  @ApiSecurity('X-TOURNAMENTS-KEY', ['X-TOURNAMENTS-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async win(@Body() winDto: WinDto) {
    const result = await this.accountantService.addWin(winDto);
    return result
      ? { message: 'Win accepted!' }
      : { message: 'Something went wrong...' };
  }
}
