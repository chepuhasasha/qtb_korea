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
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Tournaments')
@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async create(@Body() createTournamentDto: CreateTournamentDto) {
    const tournament = await this.tournamentsService.create(
      createTournamentDto,
    );
    return tournament ? tournament : { message: 'User alredy exist!' };
  }

  @Post('/find')
  async find(@Body() findTournamentDto: CreateTournamentDto) {
    return await this.tournamentsService.find(findTournamentDto);
  }

  @Get()
  async all() {
    return await this.tournamentsService.all();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getById(@Param('id') id: string) {
    const tournament = await this.tournamentsService.findByID(id);
    return tournament ? tournament : { message: 'Tournament not a found!' };
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateTournamentDto: UpdateTournamentDto,
  ) {
    const tournament = await this.tournamentsService.update(
      id,
      updateTournamentDto,
      req.user,
    );
    if (tournament)
      return { message: `Tournament "${tournament.info.title}" updated!` };
    throw new ForbiddenException();
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin', 'root')
  async remove(@Request() req, @Param('id') id: string) {
    const tournament = await this.tournamentsService.remove(id, req.user);
    if (tournament)
      return { message: `Tournament "${tournament.info.title}" removed!` };
    throw new ForbiddenException();
  }
}
