import { Module } from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import { DocumentTypesController } from './document-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DocumentTypesController],
  providers: [DocumentTypesService],
  imports: [PrismaModule]
})
export class DocumentTypesModule {}
