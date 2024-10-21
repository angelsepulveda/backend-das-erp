import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DocumentTypesModule } from '@modules/settings/document-types/infrastructure/document-types.module'
import { PrismaModule } from '@core/infrastructure/database/prisma/prisma.module'
import { AddressModule } from '@modules/settings/address/address.module'

@Module({
  imports: [PrismaModule, DocumentTypesModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
