import validate from 'uuid-validate'
import { InvalidArgumentException } from '@core/domain/exceptions/invalid-argument.exception'

export class Uuid {
  private readonly value: string

  constructor(value: string) {
    //this.ensureIsValidUuid(value)
    this.value = value
  }

  static random(): Uuid {
    return new Uuid(require('uuid').v4())
  }

  private ensureIsValidUuid(value: string): void {
    if (!validate(value)) {
      throw new InvalidArgumentException(`Invalid UUID: ${value}`)
    }
  }

  public getValue(): string {
    return this.value
  }
}
