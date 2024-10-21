import { Country } from '@modules/settings/address/countries/domain/roots/country'

export interface CountryommandRepository {
  save(country: Country): Promise<void>
  update(country: Country): Promise<void>
}
