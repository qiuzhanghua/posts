import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UsersService } from './users.service';
import { Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/current-user-decorator';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly service: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.service.listAll();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => User)
  async addUser(
    @Args('userCreateInput') userCreateInput: UserCreateInput,
  ): Promise<User> {
    const user = await this.service.create(userCreateInput);
    return user;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.service.findById(user.id);
  }
}
