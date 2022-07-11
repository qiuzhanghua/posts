import { Resolver } from '@nestjs/graphql';
import { Post } from 'src/@generated/post/post.model';
import { PostsService } from './posts.service';
import { Query } from '@nestjs/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly service: PostsService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [Post])
  posts(): Promise<Post[]> {
    return this.service.listAll();
  }
}
