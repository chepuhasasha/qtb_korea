import appConfig from 'src/configs/app.config';
import { ILogin, IUserData } from '@qtb_korea/types';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from 'src/modules/users/users.service';
import * as randomToken from 'rand-token';
import * as moment from 'moment';
import { AuthData, AuthDocument } from './authorization.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectModel(AuthData.name) private authModel: Model<AuthDocument>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate(username: string, password: string) {
    const user = await this.usersService.find({ username });
    if (user) {
      const condition = await compare(password, user.hash);
      if (condition) {
        return { username: user.username, id: user._id, role: user.role };
      }
    }
    return null;
  }

  async validateRefresh(
    user_id: string,
    username: string,
    refresh_token: string,
  ) {
    const currentDay = moment().day(1).format('YYYY/MM/DD');
    const data = await this.authModel.findOne({
      user_id,
      username,
      refresh_token,
      refresh_token_exp: currentDay,
    });
    if (data) {
      return { username: data.username, id: data.user_id, role: data.role };
    }
    return null;
  }
  async signup(data: ILogin) {
    const user = await this.usersService.create({ ...data });
    return user ? user : null;
  }

  async logout({ username }: IUserData) {
    const user = await this.authModel.findOne({ username });
    if (user) {
      user.delete();
    }
  }

  async getRefreshToken(user: IUserData) {
    const refresh_token = randomToken.generate(10);
    const refresh_token_exp = moment().day(1).format('YYYY/MM/DD');
    let data = await this.authModel.findOneAndUpdate(
      { user_id: user.id, username: user.username },
      {
        refresh_token,
        refresh_token_exp,
      },
      {
        new: true,
      },
    );
    if (!data) {
      data = await this.authModel.create({
        user_id: user.id,
        role: user.role,
        username: user.username,
        refresh_token,
        refresh_token_exp,
      });
    }
    const secretData = {
      user_id: data.user_id,
      role: data.role,
      username: data.username,
      refresh_token: data.refresh_token,
    };
    return this.jwtService.sign(secretData);
  }

  async getAccesToken(user: IUserData) {
    const life = appConfig().jwtLife;
    const payload = { username: user.username, id: user.id, role: user.role };
    return {
      token: this.jwtService.sign(payload),
      iat: moment().add(life, 'seconds').utc().unix(),
    };
  }
}
