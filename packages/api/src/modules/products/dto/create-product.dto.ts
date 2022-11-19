import type { IProduct } from '@qtb_korea/types';
import { ApiProperty } from '@nestjs/swagger';
import { ProductInfoDTO } from './product-info.dto';
import { ProductAssetsDTO } from './product-assest.dto';
import { ProductLinksDTO } from './product-links.dto';
import { ProductLocalDTO } from './product-local.dto';


export class CreateProductDTO implements IProduct {
  @ApiProperty({ description: 'Info' })
  info: ProductInfoDTO;

  @ApiProperty({ description: 'Assets' })
  assets: ProductAssetsDTO;

  @ApiProperty({ description: 'Links' })
  links: ProductLinksDTO;

  @ApiProperty({ description: 'Localization' })
  localization: ProductLocalDTO;
}
