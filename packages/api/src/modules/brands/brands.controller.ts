import { UpdateBrandDTO } from './dto/update-brand.dto';
import { CreateBrandDTO } from './dto/create-brand.dto';
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
import { BrandsService } from './brands.service';
import { FilterQuery, Document, Types } from 'mongoose';
import { Brand } from './brands.schema';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async create(@Body() createBrandDto: CreateBrandDTO) {
    const brand = await this.brandsService.create(createBrandDto);
    return brand ? brand : { message: 'User alredy exist!' };
  }

  @Post('/find')
  async find(
    @Body()
    fiilter: FilterQuery<
      Document<unknown, any, Brand> & Brand & { _id: Types.ObjectId }
    >,
  ) {
    return await this.brandsService.find(fiilter);
  }

  @Get()
  async all() {
    return await this.brandsService.all();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getById(@Param('id') id: string) {
    const brand = await this.brandsService.findByID(id);
    return brand ? brand : { message: 'Brand not a found!' };
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDTO,
  ) {
    const brand = await this.brandsService.update(id, updateBrandDto, req.user);
    if (brand) return { message: `Product "${brand.title}" updated!` };
    throw new ForbiddenException();
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async remove(@Request() req, @Param('id') id: string) {
    const brand = await this.brandsService.remove(id, req.user);
    if (brand) return { message: `Brand "${brand.title}" removed!` };
    throw new ForbiddenException();
  }
}
