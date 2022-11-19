import { Injectable } from '@nestjs/common';
import { Admin, AdminDocument } from './admins.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async create({ username, password, role }: CreateAdminDto) {
    const user = await this.adminModel.findOne({
      username: username.toLowerCase(),
    });
    if (!user) {
      const _hash = await hash(password, 10);
      const newUser = await this.adminModel.create({
        username: username.toLowerCase(),
        hash: _hash,
        role,
      });
      return newUser;
    }
    return null;
  }

  async findAll() {
    return await this.adminModel.find({});
  }

  async findOne(id: string) {
    return await this.adminModel.findOne({ _id: id });
  }

  async find(condition: {
    [K in keyof Admin]?: Admin[K];
  }) {
    return await this.adminModel.findOne(condition);
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    return await this.adminModel.findOneAndUpdate({ _id: id }, updateAdminDto);
  }

  async remove(id: string) {
    return await this.adminModel.findOneAndRemove({ _id: id });
  }
}
