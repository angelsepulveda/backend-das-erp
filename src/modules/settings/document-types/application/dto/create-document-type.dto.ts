import { ApiProperty } from '@nestjs/swagger'

export class CreateDocumentTypeDto {
  @ApiProperty({ required: true })
  name: string
  @ApiProperty({ required: false })
  code?: string
  @ApiProperty({ required: false })
  description?: string
}
