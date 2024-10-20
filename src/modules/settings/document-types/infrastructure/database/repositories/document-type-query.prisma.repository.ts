import { DocumentTypeQueryRepository } from '@modules/settings/document-types/domain/repositories/document-type-query.repository'
import { Nullable } from '@core/domain/types/nullable'
import { DocumentType } from '@modules/settings/document-types/domain/roots/document-type'
import { PrismaService } from '@core/infrastructure/database/prisma/prisma.service'
import { DocumentTypeId } from '@modules/settings/document-types/domain/roots/value-objects/document-type-id'

export class DocumentTypeQueryPrismaRepository
  implements DocumentTypeQueryRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<DocumentType[]> {
    const documentTypes = await this.prisma.documentType.findMany()

    return documentTypes.map(documentType => {
      return DocumentType.fromPrimitives({
        id: documentType.id,
        name: documentType.name,
        code: documentType.code,
        description: documentType.description,
        createdAt: documentType.createdAt,
        state: documentType.state,
      })
    })
  }

  async findByCode(code: string): Promise<Nullable<DocumentType>> {
    const documentType = await this.prisma.documentType.findFirst({
      where: {
        code,
      },
    })

    if (documentType === null) {
      return null
    }

    return DocumentType.fromPrimitives({
      id: documentType.id,
      name: documentType.name,
      code: documentType.code,
      description: documentType.description,
      createdAt: documentType.createdAt,
      state: documentType.state,
    })
  }

  async findById(id: DocumentTypeId): Promise<Nullable<DocumentType>> {
    const documentType = await this.prisma.documentType.findUnique({
      where: {
        id: id.getValue(),
      },
    })

    if (documentType === null) {
      return null
    }

    return DocumentType.fromPrimitives({
      id: documentType.id,
      name: documentType.name,
      code: documentType.code,
      description: documentType.description,
      createdAt: documentType.createdAt,
      state: documentType.state,
    })
  }

  async findByName(name: string): Promise<Nullable<DocumentType>> {
    const documentType = await this.prisma.documentType.findFirst({
      where: {
        name,
      },
    })

    if (documentType === null) {
      return null
    }

    return DocumentType.fromPrimitives({
      id: documentType.id,
      name: documentType.name,
      code: documentType.code,
      description: documentType.description,
      createdAt: documentType.createdAt,
      state: documentType.state,
    })
  }
}
