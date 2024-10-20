import { Nullable } from '@core/domain/types/nullable'
import { DocumentType } from '@modules/settings/document-types/domain/roots/document-type'
import { DocumentTypeId } from '@modules/settings/document-types/domain/roots/value-objects/document-type-id'

export interface DocumentTypeQueryRepository {
  findAll(): Promise<DocumentType[]>
  findById(id: DocumentTypeId): Promise<Nullable<DocumentType>>
  findByName(name: string): Promise<Nullable<DocumentType>>
  findByCode(code: string): Promise<Nullable<DocumentType>>
}
