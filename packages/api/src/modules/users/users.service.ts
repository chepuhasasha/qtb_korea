import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Document, Types } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create({ username, password, role }: CreateUserDTO) {
    const user = await this.userModel.findOne({
      username: username.toLowerCase(),
    });
    if (!user) {
      const _hash = await hash(password, 10);
      const newUser = await this.userModel.create({
        username: username.toLowerCase(),
        hash: _hash,
        role: role ? role : 'user',
      });
      return newUser;
    }
    return null;
  }

  async findAll() {
    return await this.userModel.find({});
  }

  async findOne(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async find(
    condition: FilterQuery<
      Document<unknown, any, User> &
        User & {
          _id: Types.ObjectId;
        }
    >,
  ) {
    return await this.userModel.findOne(condition);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findOneAndUpdate({ _id: id }, updateUserDto);
  }

  async remove(id: string) {
    return await this.userModel.findOneAndRemove({ _id: id });
  }
}
