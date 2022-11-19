import { UpdateProductDTO } from './dto/update-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import {
  Controller,
  Request,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';
import { ProductsService } from './products.service';
import { FilterQuery, Document, Types } from 'mongoose';
import { Product } from './products.schema';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async create(@Body() createProductDto: CreateProductDTO) {
    const product = await this.productsService.create(createProductDto);
    return product ? product : { message: 'User alredy exist!' };
  }

  @Post('/find')
  async find(
    @Body()
    fiilter: FilterQuery<
      Document<unknown, any, Product> & Product & { _id: Types.ObjectId }
    >,
  ) {
    return await this.productsService.find(fiilter);
  }

  @Get()
  async all() {
    return await this.productsService.all();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getById(@Param('id') id: string) {
    const product = await this.productsService.findByID(id);
    return product ? product : { message: 'Product not a found!' };
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDTO,
  ) {
    const product = await this.productsService.update(id, updateProductDto);
    if (product) return { message: `Product "${product.info.title}" updated!` };
    throw new ForbiddenException();
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async remove(@Param('id') id: string) {
    const product = await this.productsService.remove(id);
    if (product) return { message: `Product "${product.info.title}" removed!` };
    throw new ForbiddenException();
  }
}
