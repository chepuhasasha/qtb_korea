import type { IProductCreate } from '@qtb_korea/types';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProductDTO implements IProductCreate {
  @ApiProperty({ description: '' })
  brand_id: string;
  @ApiProperty({ description: '' })
  title: string;
  @ApiProperty({ description: '' })
  description: string;
  @ApiProperty({ description: '' })
  characteristics_1: string;
  @ApiProperty({ description: '' })
  characteristics_2: string;
  @ApiProperty({ description: '' })
  characteristics_3: string;
  @ApiProperty({ description: '' })
  link_name: string;
  @ApiProperty({ description: '' })
  link_url: string;
  @ApiProperty({ description: '' })
  ru_title: string;
  @ApiProperty({ description: '' })
  ru_description: string;
  @ApiProperty({ description: '' })
  ru_characteristics_1: string;
  @ApiProperty({ description: '' })
  ru_characteristics_2: string;
  @ApiProperty({ description: '' })
  ru_characteristics_3: string;
  @ApiProperty({ description: '' })
  ru_link_name: string;
  @ApiProperty({ description: '' })
  ru_link_url: string;
}
