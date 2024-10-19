import { DocumentTypeId } from '@modules/settings/document-types/domain/roots/value-objects/document-type-id'
import { Nullable } from '@core/domain/types/nullable'
import {
  DocumentTypeProperties,
  DocumentTypeUpdateProperties,
} from '@modules/settings/document-types/domain/roots/interfaces/document-type-properties'
import { DocumentTypePrimitives } from '@modules/settings/document-types/domain/roots/interfaces/document-type-primitives'

export class DocumentType {
  private readonly id: DocumentTypeId
  private name: string
  private code: Nullable<string>
  private description: Nullable<string>
  private readonly createdAt: Nullable<Date>
  private status: boolean

  private constructor(props: DocumentTypeProperties) {
    Object.assign(this, props)
  }

  properties(): DocumentTypeProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      description: this.description,
      createdAt: this.createdAt,
      status: this.status,
    }
  }

  toPrimitives(): DocumentTypePrimitives {
    return {
      id: this.id.getValue(),
      name: this.name,
      code: this.code,
      description: this.description,
      createdAt: this.createdAt,
      status: this.status,
    }
  }

  static fromPrimitives(props: DocumentTypePrimitives): DocumentType {
    return new DocumentType({
      id: new DocumentTypeId(props.id),
      name: props.name,
      code: props.code,
      description: props.description,
      createdAt: props.createdAt,
      status: props.status,
    })
  }

  static create(
    name: string,
    code: Nullable<string>,
    description: Nullable<string>,
  ): DocumentType {
    return new DocumentType({
      id: DocumentTypeId.random(),
      name,
      code,
      description,
      createdAt: new Date(),
      status: true,
    })
  }

  update(fieldsToUpdate: DocumentTypeUpdateProperties): void {
    Object.assign(this, fieldsToUpdate)
  }

  delete(): void {
    this.status = false
  }

  restore(): void {
    this.status = true
  }
}
