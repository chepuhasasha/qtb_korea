import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Res,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizationService } from './authorization.service';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { CreateUserDTO } from '../users/dto/create-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authService: AuthorizationService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @ApiOkResponse({ description: 'Login successfully.' })
  @HttpCode(200)
  async login(
    @Body() loginDto: LoginDto,
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token, iat } = await this.authService.getAccesToken(req.user);
    const refresh = await this.authService.getRefreshToken(req.user);
    res.cookie('refresh', refresh, { httpOnly: true });
    return { user: req.user, access_token: token, iat };
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDTO) {
    const data = await this.authService.signup(createUserDto);
    if (data) {
      return { message: 'Signup success!' };
    }
    return { message: 'ERROR!' };
  }

  @Get('logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(@Request() req, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(req.user);
    res.cookie('refresh', null, { httpOnly: true });
    return { message: 'Logout success!' };
  }

  @Get('refresh')
  @UseGuards(AuthGuard('refresh'))
  async refreshToken(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token, iat } = await this.authService.getAccesToken(req.user);
    const refresh = await this.authService.getRefreshToken(req.user);
    res.cookie('refresh', refresh, { httpOnly: true });
    return { user: req.user, access_token: token, iat };
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Request() req) {
    return req.user;
  }
}
