import { IUserData, IProduct } from '@qtb_korea/types';
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

  async create(product: CreateProductDTO, files: { filename: string }[]) {
    const newProduct: IProduct = {
      info: {
        title: product.title,
        description: product.description,
        brand_id: product.brand_id,
        characteristics: [
          product.characteristics_1,
          product.characteristics_2,
          product.characteristics_3,
        ],
        link: {
          name: product.link_name,
          url: product.link_url,
        },
      },
      images: files.map((file) => file.filename),
      localization: {
        ru: {
          title: product.ru_title,
          description: product.ru_description,
          brand_id: product.brand_id,
          characteristics: [
            product.ru_characteristics_1,
            product.ru_characteristics_2,
            product.ru_characteristics_3,
          ],
          link: {
            name: product.ru_link_name,
            url: product.ru_link_url,
          },
        },
      },
    };
    return await this.productModel.create(newProduct);
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

  async update(_id: string, updateProductDto: UpdateProductDTO) {
    return await this.productModel.findOneAndUpdate({ _id }, updateProductDto, {
      new: true,
    });
  }

  async remove(_id: string) {
    return await this.productModel.findOneAndRemove({ _id });
  }
}
