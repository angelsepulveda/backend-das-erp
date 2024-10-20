import { Inject, Injectable } from '@nestjs/common'
import { DocumentTypeCommandRepository } from '@modules/settings/document-types/domain/repositories/document-type-command.repository'
import { DocumentTypeQueryRepository } from '@modules/settings/document-types/domain/repositories/document-type-query.repository'
import { DocumentTypeDto } from '@modules/settings/document-types/application/dto/document-type.dto'
import { DocumentTypeId } from '@modules/settings/document-types/domain/roots/value-objects/document-type-id'
import { NotFoundException } from '@core/domain/exceptions/not-found.exception'
import {
  DOCUMENT_TYPE_COMMAND_REPOSITORY,
  DOCUMENT_TYPE_QUERY_REPOSITORY,
} from '@modules/settings/document-types/application/utils/DocumentTypeToken'

@Injectable()
export class RestoreDocumentType {
  constructor(
    @Inject(DOCUMENT_TYPE_COMMAND_REPOSITORY)
    private readonly documentTypeCommandRepository: DocumentTypeCommandRepository,
    @Inject(DOCUMENT_TYPE_QUERY_REPOSITORY)
    private readonly documentTypeQueryRepository: DocumentTypeQueryRepository,
  ) {}

  async execute(id: string): Promise<DocumentTypeDto> {
    const documentType = await this.documentTypeQueryRepository.findById(
      new DocumentTypeId(id),
    )

    if (!documentType) {
      throw new NotFoundException('Document type not found')
    }

    documentType.restore()

    await this.documentTypeCommandRepository.update(documentType)

    const primitives = documentType.toPrimitives()

    return {
      id: primitives.id,
      name: primitives.name,
      code: primitives.code,
      description: primitives.description,
      status: primitives.state,
      createdAt: primitives.createdAt,
    }
  }
}
