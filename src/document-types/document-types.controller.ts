import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { DocumentTypesService } from './document-types.service'
import { CreateDocumentTypeDto } from './dto/create-document-type.dto'
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto'
import { DocumentType } from './entities/document-type.entity'
import { ApiCreatedResponse } from '@nestjs/swagger'

@Controller('document-types')
export class DocumentTypesController {
  constructor(private readonly documentTypesService: DocumentTypesService) {}

  @Post()
  async create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    return await this.documentTypesService.create(createDocumentTypeDto)
  }

  @Get()
  @ApiCreatedResponse({ type: DocumentType, isArray: true })
  async findAll() {
    return this.documentTypesService.findAll()
  }

  @Get(':id')
  @ApiCreatedResponse({ type: DocumentType })
  async findOne(@Param('id') id: string) {
    return this.documentTypesService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDocumentTypeDto: UpdateDocumentTypeDto,
  ) {
    return this.documentTypesService.update(id, updateDocumentTypeDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.documentTypesService.remove(id)
  }
}
