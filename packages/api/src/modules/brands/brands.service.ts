import { IUserData } from '@qtb_korea/types';
import { Injectable } from '@nestjs/common';
import { Brand, BrandDocument } from './brands.schema';
import { CreateBrandDTO } from './dto/create-brand.dto';
import { UpdateBrandDTO } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types, Document } from 'mongoose';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name)
    private brandModel: Model<BrandDocument>,
  ) {}

  async create(brand: CreateBrandDTO) {
    return await this.brandModel.create(brand);
  }

  async find(
    condition: FilterQuery<
      Document<unknown, any, Brand> &
        Brand & {
          _id: Types.ObjectId;
        }
    >,
  ) {
    return await this.brandModel.find(condition);
  }

  async all() {
    return await this.brandModel.find({});
  }

  async findByID(id: string) {
    return await this.brandModel.findById(id);
  }

  async update(_id: string, updateBrandDto: UpdateBrandDTO, user: IUserData) {
    if (user.role === 'root') {
      return await this.brandModel.findOneAndUpdate({ _id }, updateBrandDto, {
        new: true,
      });
    } else {
      return await this.brandModel.findOneAndUpdate(
        { _id, 'permissions.owners': [user.id] },
        updateBrandDto,
        {
          new: true,
        },
      );
    }
  }

  async remove(_id: string, user: IUserData) {
    if (user.role === 'root') {
      return await this.brandModel.findOneAndRemove({ _id });
    } else {
      return await this.brandModel.findOneAndRemove({ _id });
    }
  }
}
