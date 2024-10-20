import { DocumentTypeCommandRepository } from '@modules/settings/document-types/domain/repositories/document-type-command.repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@core/infrastructure/database/prisma/prisma.service'
import { DocumentType } from '@modules/settings/document-types/domain/roots/document-type'

@Injectable()
export class DocumentTypeCommandPrismaRepository
  implements DocumentTypeCommandRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async save(documentType: DocumentType): Promise<void> {
    await this.prisma.documentType.create({ data: documentType.toPrimitives() })
  }

  async update(documentType: DocumentType): Promise<void> {
    const documentTypePrimitives = documentType.toPrimitives()

    await this.prisma.documentType.update({
      where: { id: documentTypePrimitives.id },
      data: {
        name: documentTypePrimitives.name,
        code: documentTypePrimitives.code,
        description: documentTypePrimitives.description,
        state: documentTypePrimitives.state,
      },
    })
  }
}
