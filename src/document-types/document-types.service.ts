import { Injectable } from '@nestjs/common'
import { CreateDocumentTypeDto } from './dto/create-document-type.dto'
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class DocumentTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return await this.prisma.documentType.create({ data: createDocumentTypeDto })
  }

  async findAll() {
    return await this.prisma.documentType.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} documentType`
  }

  update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return `This action updates a #${id} documentType`
  }

  remove(id: number) {
    return `This action removes a #${id} documentType`
  }
}
