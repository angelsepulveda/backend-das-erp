import { Nullable } from '@core/domain/types/nullable'
import { Country } from '@modules/settings/address/countries/domain/roots/country'
import { CountryId } from '@modules/settings/address/countries/domain/roots/value-objects/country-id'

export interface CountryQueryRepository {
  findAll(): Promise<Country[]>
  findById(id: CountryId): Promise<Nullable<Country>>
  findByName(name: string): Promise<Nullable<Country>>
  findByCode(code: string): Promise<Nullable<Country>>
}
