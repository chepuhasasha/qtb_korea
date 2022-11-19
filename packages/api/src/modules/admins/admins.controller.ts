import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  UseGuards,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Admins')
@Controller('admins')
export class AdminController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiSecurity('X-TOURNAMENTS-KEY', ['X-TOURNAMENTS-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async create(@Body() createAdminDto: CreateAdminDto) {
    const user = await this.adminsService.create(createAdminDto);
    return user
      ? { message: `Successfully! User ${user.username} created.` }
      : { message: 'User alredy exist!' };
  }

  @Get()
  async findAll() {
    const users = await this.adminsService.findAll();
    return users.map((user) => ({
      id: user._id,
      username: user.username,
    }));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.adminsService.findOne(id);
    return user
      ? { id: user._id, username: user.username }
      : { message: 'User not a found!' };
  }

  @Patch(':id')
  @ApiSecurity('X-TOURNAMENTS-KEY', ['X-TOURNAMENTS-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    const user = await this.adminsService.update(id, updateAdminDto);
    return user
      ? { message: `User ${user.username} updated!` }
      : { message: 'User not a found!' };
  }

  @Delete(':id')
  @ApiSecurity('X-TOURNAMENTS-KEY', ['X-TOURNAMENTS-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async remove(@Param('id') id: string) {
    const user = await this.adminsService.remove(id);
    return user
      ? { message: `User ${user.username} removed!` }
      : { message: 'User not a found!' };
  }
}
