import { Module } from '@nestjs/common'
import { DocumentTypesController } from '@modules/settings/document-types/infrastructure/http/controllers/document-types.controller'
import { PrismaModule } from '@core/infrastructure/database/prisma/prisma.module'
import { UpdateDocumentType } from '@modules/settings/document-types/application/use-cases/update-document-type'
import { CreateDocumentType } from '@modules/settings/document-types/application/use-cases/create-document-type'
import { DeleteDocumentType } from '@modules/settings/document-types/application/use-cases/delete-document-type'
import { RestoreDocumentType } from '@modules/settings/document-types/application/use-cases/restore-document-type'
import { FindAllDocumentType } from '@modules/settings/document-types/application/use-cases/find-all-document-type'
import { DocumentTypeQueryPrismaRepository } from '@modules/settings/document-types/infrastructure/database/repositories/document-type-query.prisma.repository'
import { DocumentTypeCommandPrismaRepository } from '@modules/settings/document-types/infrastructure/database/repositories/document-type-command-prisma.repository'
import {
  DOCUMENT_TYPE_COMMAND_REPOSITORY,
  DOCUMENT_TYPE_QUERY_REPOSITORY,
} from '@modules/settings/document-types/application/utils/DocumentTypeToken'
import { PrismaService } from '@core/infrastructure/database/prisma/prisma.service'

@Module({
  controllers: [DocumentTypesController],
  imports: [PrismaModule],
  providers: [
    UpdateDocumentType,
    CreateDocumentType,
    DeleteDocumentType,
    RestoreDocumentType,
    FindAllDocumentType,
    {
      provide: DOCUMENT_TYPE_QUERY_REPOSITORY,
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) =>
        new DocumentTypeQueryPrismaRepository(prisma),
    },
    {
      provide: DOCUMENT_TYPE_COMMAND_REPOSITORY,
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) =>
        new DocumentTypeCommandPrismaRepository(prisma),
    },
  ],
})
export class DocumentTypesModule {}
