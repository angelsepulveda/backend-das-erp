import { Nullable } from '@core/domain/types/nullable'
import { CountryId } from '@modules/settings/address/countries/domain/roots/value-objects/country-id'

interface CountryEssentials {
  readonly name: string
  readonly state: boolean
  readonly id: CountryId
}

interface CountryOptionals {
  readonly code: Nullable<string>
  readonly demonym: Nullable<string>
  readonly description: Nullable<string>
  readonly createdAt: Nullable<Date>
}

export type CountryProperties = CountryEssentials & Partial<CountryOptionals>

export type CountryUpdateProperties = Partial<
  Omit<CountryEssentials, 'id'> & Omit<CountryOptionals, 'createdAt'>
>
