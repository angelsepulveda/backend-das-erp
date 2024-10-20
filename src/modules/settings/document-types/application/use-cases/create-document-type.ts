import { Inject, Injectable } from '@nestjs/common'
import { DocumentTypeCommandRepository } from '@modules/settings/document-types/domain/repositories/document-type-command.repository'
import { CreateDocumentTypeDto } from '@modules/settings/document-types/application/dto/create-document-type.dto'
import { DocumentType } from '@modules/settings/document-types/domain/roots/document-type'
import { DocumentTypeDto } from '@modules/settings/document-types/application/dto/document-type.dto'
import { DOCUMENT_TYPE_COMMAND_REPOSITORY } from '@modules/settings/document-types/application/utils/DocumentTypeToken'

@Injectable()
export class CreateDocumentType {
  constructor(
    @Inject(DOCUMENT_TYPE_COMMAND_REPOSITORY)
    private readonly documentTypeCommandRepository: DocumentTypeCommandRepository,
  ) {}

  async execute(payload: CreateDocumentTypeDto): Promise<DocumentTypeDto> {
    const documentType = DocumentType.create(
      payload.name,
      payload.code,
      payload.description,
    )

    await this.documentTypeCommandRepository.save(documentType)

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
