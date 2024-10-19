import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DocumentTypesModule } from './document-types/document-types.module';

@Module({
  imports: [PrismaModule, DocumentTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
