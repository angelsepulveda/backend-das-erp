import { Nullable } from '@core/domain/types/nullable'

interface CountryEssentials {
  readonly name: string
  readonly state: boolean
  readonly id: string
}

interface CountryOptionals {
  readonly code: Nullable<string>
  readonly demonym: Nullable<string>
  readonly description: Nullable<string>
  readonly createdAt: Nullable<Date>
}

export type CountryPrimitives = CountryEssentials & Partial<CountryOptionals>

export type CountryUpdatePrimitives = Partial<
  Omit<CountryEssentials, 'id'> & Omit<CountryOptionals, 'createdAt'>
>
