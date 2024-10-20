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
  private state: boolean

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
      state: this.state,
    }
  }

  toPrimitives(): DocumentTypePrimitives {
    return {
      id: this.id.getValue(),
      name: this.name,
      code: this.code,
      description: this.description,
      createdAt: this.createdAt,
      state: this.state,
    }
  }

  static fromPrimitives(props: DocumentTypePrimitives): DocumentType {
    return new DocumentType({
      id: new DocumentTypeId(props.id),
      name: props.name,
      code: props.code,
      description: props.description,
      createdAt: props.createdAt,
      state: props.state,
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
      state: true,
    })
  }

  update(fieldsToUpdate: DocumentTypeUpdateProperties): void {
    Object.assign(this, fieldsToUpdate)
  }

  delete(): void {
    this.state = false
  }

  restore(): void {
    this.state = true
  }
}
