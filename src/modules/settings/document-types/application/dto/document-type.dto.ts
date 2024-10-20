import { Nullable } from '@core/domain/types/nullable'
import { ApiProperty } from '@nestjs/swagger'

export class DocumentTypeDto {
  @ApiProperty({ required: true })
  id: string
  @ApiProperty({ required: true })
  name: string
  @ApiProperty({ required: false })
  code?: Nullable<string>
  @ApiProperty({ required: false })
  description: Nullable<string>
  @ApiProperty({ required: true })
  status: boolean
  @ApiProperty({ required: false })
  createdAt: Nullable<Date>
}
