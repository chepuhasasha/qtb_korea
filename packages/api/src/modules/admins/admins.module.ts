import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminController } from './admins.controller';
import { Admin, AdminSchema } from './admins.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
  ],
  controllers: [AdminController],
  exports: [AdminsService],
  providers: [AdminsService],
})
export class AdminsModule {}
