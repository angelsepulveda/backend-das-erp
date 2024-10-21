import { Nullable } from '@core/domain/types/nullable'
import { CountryId } from '@modules/settings/address/countries/domain/roots/value-objects/country-id'
import {
  CountryProperties,
  CountryUpdateProperties,
} from '@modules/settings/address/countries/domain/roots/interfaces/country-properties'
import { CountryPrimitives } from '@modules/settings/address/countries/domain/roots/interfaces/country-primitives'

export class Country {
  private readonly id: CountryId
  private name: string
  private code: Nullable<string>
  private demonym: Nullable<string>
  private description: Nullable<string>
  private readonly createdAt: Nullable<Date>
  private state: boolean

  private constructor(props: CountryProperties) {
    Object.assign(this, props)
  }

  properties(): CountryProperties {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      demonym: this.demonym,
      description: this.description,
      createdAt: this.createdAt,
      state: this.state,
    }
  }

  toPrimitives(): CountryPrimitives {
    return {
      id: this.id.getValue(),
      name: this.name,
      code: this.code,
      demonym: this.demonym,
      description: this.description,
      createdAt: this.createdAt,
      state: this.state,
    }
  }

  static fromPrimitives(props: CountryPrimitives): Country {
    return new Country({
      id: new CountryId(props.id),
      name: props.name,
      code: props.code,
      demonym: props.demonym,
      description: props.description,
      createdAt: props.createdAt,
      state: props.state,
    })
  }

  static create(
    name: string,
    code: Nullable<string>,
    demonym: Nullable<string>,
    description: Nullable<string>,
  ): Country {
    return new Country({
      id: CountryId.random(),
      name,
      code,
      demonym,
      description,
      createdAt: new Date(),
      state: true,
    })
  }

  update(fieldsToUpdate: CountryUpdateProperties): void {
    Object.assign(this, fieldsToUpdate)
  }

  delete(): void {
    this.state = false
  }

  restore(): void {
    this.state = true
  }
}
