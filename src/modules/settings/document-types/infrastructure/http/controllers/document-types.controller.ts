import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CreateDocumentTypeDto } from '@modules/settings/document-types/application/dto/create-document-type.dto'
import { UpdateDocumentTypeDto } from '@modules/settings/document-types/application/dto/update-document-type.dto'
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger'
import { CreateDocumentType } from '@modules/settings/document-types/application/use-cases/create-document-type'
import { UpdateDocumentType } from '@modules/settings/document-types/application/use-cases/update-document-type'
import { FindAllDocumentType } from '@modules/settings/document-types/application/use-cases/find-all-document-type'
import { DeleteDocumentType } from '@modules/settings/document-types/application/use-cases/delete-document-type'
import { RestoreDocumentType } from '@modules/settings/document-types/application/use-cases/restore-document-type'
import { DocumentTypeDto } from '@modules/settings/document-types/application/dto/document-type.dto'

@ApiTags('Document Types')
@Controller('document-types')
export class DocumentTypesController {
  constructor(
    private readonly createDocumentType: CreateDocumentType,
    private readonly updateDocumentType: UpdateDocumentType,
    private readonly findAllDocumentType: FindAllDocumentType,
    private readonly deleteDocumentType: DeleteDocumentType,
    private readonly restoreDocumentType: RestoreDocumentType,
  ) {}

  @Post()
  async create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    return await this.createDocumentType.execute(createDocumentTypeDto)
  }

  @Get()
  @ApiCreatedResponse({ type: DocumentTypeDto, isArray: true })
  async findAll() {
    return await this.findAllDocumentType.execute()
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDocumentTypeDto: UpdateDocumentTypeDto,
  ) {
    return await this.updateDocumentType.execute(id, updateDocumentTypeDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.deleteDocumentType.execute(id)
  }
  @Patch('restore/:id')
  async restore(@Param('id') id: string) {
    return await this.restoreDocumentType.execute(id)
  }
}
