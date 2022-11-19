import { IUserData } from '@qtb_korea/types';
import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './products.schema';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types, Document } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async create(product: CreateProductDTO) {
    return await this.productModel.create(product);
  }

  async find(
    condition: FilterQuery<
      Document<unknown, any, Product> &
        Product & {
          _id: Types.ObjectId;
        }
    >,
  ) {
    return await this.productModel.find(condition);
  }

  async all() {
    return await this.productModel.find({});
  }

  async findByID(id: string) {
    return await this.productModel.findById(id);
  }

  async update(
    _id: string,
    updateProductDto: UpdateProductDTO,
    user: IUserData,
  ) {
    if (user.role === 'root') {
      return await this.productModel.findOneAndUpdate(
        { _id },
        updateProductDto,
        {
          new: true,
        },
      );
    } else {
      return await this.productModel.findOneAndUpdate(
        { _id, 'permissions.owners': [user.id] },
        updateProductDto,
        {
          new: true,
        },
      );
    }
  }

  async remove(_id: string, user: IUserData) {
    if (user.role === 'root') {
      return await this.productModel.findOneAndRemove({ _id });
    } else {
      return await this.productModel.findOneAndRemove({
        _id,
      });
    }
  }
}
