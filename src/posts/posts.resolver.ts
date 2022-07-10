import { Resolver } from '@nestjs/graphql';
import { Post } from 'src/@generated/post/post.model';
import { PostsService } from './posts.service';
import { Query } from '@nestjs/graphql';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly service: PostsService) {}

  @Query((returns) => [Post])
  posts(): Promise<Post[]> {
    return this.service.listAll();
  }
}
