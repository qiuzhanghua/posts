import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [PrismaModule],
  providers: [PostsService, PostsResolver],
  controllers: [PostsController],
})
export class PostsModule {}
