import { DocumentTypeId } from '@modules/settings/document-types/domain/roots/value-objects/document-type-id'
import { Nullable } from '@core/domain/types/nullable'

interface DocumentTypeEssentials {
  readonly name: string
  readonly state: boolean
  readonly id: string
}

interface DocumentTypeOptionals {
  readonly code: Nullable<string>
  readonly description: Nullable<string>
  readonly createdAt: Nullable<Date>
}

export type DocumentTypePrimitives = DocumentTypeEssentials &
  Partial<DocumentTypeOptionals>

export type DocumentTypeUpdatePrimitives = Partial<
  Omit<DocumentTypeEssentials, 'id'> & Omit<DocumentTypeOptionals, 'createdAt'>
>
