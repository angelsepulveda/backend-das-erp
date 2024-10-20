import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DocumentTypesModule } from '@modules/settings/document-types/infrastructure/document-types.module'
import { PrismaModule } from '@core/infrastructure/database/prisma/prisma.module'

@Module({
  imports: [PrismaModule, DocumentTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
