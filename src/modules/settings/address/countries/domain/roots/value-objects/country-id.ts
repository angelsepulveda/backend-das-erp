import { Uuid } from '@core/domain/value-objects/uuid'

export class CountryId extends Uuid {
  constructor(value: string) {
    super(value)
  }
}
