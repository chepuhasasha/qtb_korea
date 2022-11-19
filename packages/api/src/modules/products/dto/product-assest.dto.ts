import { ApiProperty } from '@nestjs/swagger';
import { IProductAssets } from '@qtb_korea/types';

export class ProductAssetsDTO implements IProductAssets {
  @ApiProperty({
    description: 'Images URLs list',
    default: [],
  })
  images: string[];

  @ApiProperty({
    description: 'Buner URL',
    default: './someimage.png',
  })
  baner: string;

}
