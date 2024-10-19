import { Nullable } from '@core/domain/types/nullable'
import { DocumentType } from '@modules/settings/document-types/domain/roots/document-type'

export interface DocumentTypeQueryRepository {
  findAll(): Promise<DocumentType[]>
  findById(id: string): Promise<Nullable<DocumentType>>
  findByName(name: string): Promise<Nullable<DocumentType>>
  findByCode(code: string): Promise<Nullable<DocumentType>>
}
