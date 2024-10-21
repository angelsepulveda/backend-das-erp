import { Module } from '@nestjs/common'
import { CountriesModule } from './countries/infrastructure/countries.module'

@Module({
  imports: [CountriesModule],
})
export class AddressModule {}
