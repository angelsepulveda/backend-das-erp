import validate from 'uuid-validate'

export class Uuid {
  private readonly value: string

  constructor(value: string) {
    this.ensureIsValidUuid(value)
    this.value = value
  }

  static random(): Uuid {
    return new Uuid(require('uuid').v4())
  }

  private ensureIsValidUuid(value: string): void {
    if (!validate(value)) {
      throw new Error('Invalid UUID')
    }
  }

  public getValue(): string {
    return this.value
  }
}
