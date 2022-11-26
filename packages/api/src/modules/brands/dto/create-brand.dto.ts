import type { IBrand } from '@qtb_korea/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDTO implements IBrand {
  @ApiProperty({ description: 'Title' })
  title: string;
  @ApiProperty({ description: 'Logo url' })
  baner: string;
}
