import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prism: PrismaService) {}

  async listAll() {
    return this.prism.post.findMany();
  }
}
