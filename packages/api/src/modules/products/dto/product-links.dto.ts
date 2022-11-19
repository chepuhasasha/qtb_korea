import { ApiProperty } from '@nestjs/swagger';
import { IProductLinks } from '@qtb_korea/types';

export class ProductLinksDTO implements IProductLinks {
  @ApiProperty({
    description: 'OZON link',
    default: 'some ozon url',
  })
  ozon: string | null;
  @ApiProperty({
    description: 'Default link',
    default: 'some url',
  })
  default: string;

}
