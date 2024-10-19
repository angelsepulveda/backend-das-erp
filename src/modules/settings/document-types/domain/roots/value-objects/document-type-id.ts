import { Uuid } from '@core/domain/value-objects/uuid'

export class DocumentTypeId extends Uuid {
  constructor(value: string) {
    super(value)
  }
}
