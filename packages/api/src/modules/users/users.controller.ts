import { CreateUserDTO } from './dto/create-user.dto';
import {
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  UseGuards,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('root')
  async create(@Body() createUserDto: CreateUserDTO) {
    const user = await this.usersService.create(createUserDto);
    return user
      ? { message: `Successfully! User ${user.username} created.` }
      : { message: 'User alredy exist!' };
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @Roles('root')
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => ({
      id: user._id,
      username: user.username,
      role: user.role,
    }));
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('root')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return user
      ? { id: user._id, username: user.username, role: user.role }
      : { message: 'User not a found!' };
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('root')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);
    return user
      ? { message: `User ${user.username} updated!` }
      : { message: 'User not a found!' };
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('root')
  async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    return user
      ? { message: `User ${user.username} removed!` }
      : { message: 'User not a found!' };
  }
}
