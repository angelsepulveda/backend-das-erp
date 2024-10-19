import { Injectable } from '@nestjs/common'
import { CreateDocumentTypeDto } from './dto/create-document-type.dto'
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class DocumentTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return this.prisma.documentType.create({ data: createDocumentTypeDto })
  }

  async findAll() {
    return this.prisma.documentType.findMany()
  }

  async findOne(id: string) {
    return this.prisma.documentType.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: string, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return this.prisma.documentType.update({
      where: { id },
      data: updateDocumentTypeDto,
    })
  }

  async remove(id: string) {
    return this.prisma.documentType.delete({ where: { id } })
  }
}
