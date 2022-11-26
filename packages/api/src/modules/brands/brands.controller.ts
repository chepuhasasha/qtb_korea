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
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';
import { BrandsService } from './brands.service';
import { FilterQuery, Document, Types } from 'mongoose';
import { Brand } from './brands.schema';
import { FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../../utils/images.utils';
import { diskStorage } from 'multer';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  @UseInterceptors(
    FilesInterceptor('images', 2, {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async create(@UploadedFiles() files, @Body() createBrandDto: CreateBrandDTO) {
    const brand = await this.brandsService.create({
      ...createBrandDto,
      baner: files[0].filename,
      logo: files[1].filename,
    });
    return brand ? brand : { message: 'Something went wrong!' };
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
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDTO,
  ) {
    const brand = await this.brandsService.update(id, updateBrandDto);
    if (brand) return { message: `Product "${brand.info.title}" updated!` };
    throw new ForbiddenException();
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async remove(@Param('id') id: string) {
    const brand = await this.brandsService.remove(id);
    if (brand) return { message: `Brand "${brand.info.title}" removed!` };
    throw new ForbiddenException();
  }
}
