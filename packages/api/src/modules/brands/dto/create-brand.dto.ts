import type { IBrandCreate } from '@qtb_korea/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDTO implements IBrandCreate {
  @ApiProperty({ description: 'Title EN' })
  title: string;
  @ApiProperty({ description: 'Description EN' })
  description: string;
  @ApiProperty({ description: 'Title RU' })
  ru_title: string;
  @ApiProperty({ description: 'Description ru' })
  ru_description: string;
  @ApiProperty({ description: 'Baner' })
  baner: string;
  @ApiProperty({ description: 'Logo' })
  logo: string;
}
