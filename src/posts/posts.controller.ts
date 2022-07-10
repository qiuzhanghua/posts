import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get()
  async listAll() {
    return this.service.listAll();
  }
}
