import { ApiProperty } from '@nestjs/swagger';
import { IProductInfo } from '@qtb_korea/types';

export class ProductInfoDTO implements IProductInfo {
  @ApiProperty({
    description: 'Title',
    default: 'My best product!',
  })
  title: string;
  @ApiProperty({
    description: 'Description',
    default: 'This is my best product!',
  })
  description: string;
  @ApiProperty({
    description: 'Brand ID',
    default: 'some ID...',
  })
  brand_id: string;
  @ApiProperty({
    description: 'Characteristics',
    default: {},
  })
  characteristics: Record<string, string>;
}
