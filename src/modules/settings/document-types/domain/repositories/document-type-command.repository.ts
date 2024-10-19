import { DocumentType } from '@modules/settings/document-types/domain/roots/document-type'

export interface DocumentTypeCommandRepository {
  save(documentType: DocumentType): Promise<void>
  update(documentType: DocumentType): Promise<void>
}
