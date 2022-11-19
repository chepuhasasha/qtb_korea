import { ApiProperty } from '@nestjs/swagger';
import { IProductLocal } from '@qtb_korea/types';

export class ProductLocalDTO implements IProductLocal {
  @ApiProperty({
    description: 'Russina',
    default: 'ru local map id',
  })
  ru: string;
  @ApiProperty({
    description: 'English',
    default: 'en local map id',
  })
  en: string;

}
