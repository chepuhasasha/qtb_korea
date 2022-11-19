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
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiSecurity('X-QTB-KEY', ['X-QTB-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async create(@Body() createUserDto: CreateUserDTO) {
    const user = await this.usersService.create(createUserDto);
    return user
      ? { message: `Successfully! User ${user.username} created.` }
      : { message: 'User alredy exist!' };
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => ({
      id: user._id,
      username: user.username,
    }));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return user
      ? { id: user._id, username: user.username }
      : { message: 'User not a found!' };
  }

  @Patch(':id')
  @ApiSecurity('X-QTB-KEY', ['X-QTB-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);
    return user
      ? { message: `User ${user.username} updated!` }
      : { message: 'User not a found!' };
  }

  @Delete(':id')
  @ApiSecurity('X-QTB-KEY', ['X-QTB-KEY'])
  @UseGuards(AuthGuard('api-key'))
  async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    return user
      ? { message: `User ${user.username} removed!` }
      : { message: 'User not a found!' };
  }
}
