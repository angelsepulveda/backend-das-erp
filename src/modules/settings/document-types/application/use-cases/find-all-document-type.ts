import { Inject, Injectable } from '@nestjs/common'
import { DocumentTypeQueryRepository } from '@modules/settings/document-types/domain/repositories/document-type-query.repository'
import { DocumentTypeDto } from '@modules/settings/document-types/application/dto/document-type.dto'
import { DOCUMENT_TYPE_QUERY_REPOSITORY } from '@modules/settings/document-types/application/utils/DocumentTypeToken'

@Injectable()
export class FindAllDocumentType {
  constructor(
    @Inject(DOCUMENT_TYPE_QUERY_REPOSITORY)
    private readonly documentTypeQueryRepository: DocumentTypeQueryRepository,
  ) {}

  async execute(): Promise<DocumentTypeDto[]> {
    const documentType = await this.documentTypeQueryRepository.findAll()

    return documentType.map(documentType => {
      const documentTypePrimitives = documentType.toPrimitives()
      return {
        id: documentTypePrimitives.id,
        name: documentTypePrimitives.name,
        code: documentTypePrimitives.code,
        description: documentTypePrimitives.description,
        status: documentTypePrimitives.state,
        createdAt: documentTypePrimitives.createdAt,
      }
    })
  }
}
