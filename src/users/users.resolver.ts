import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UsersService } from './users.service';
import { Query } from '@nestjs/graphql';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly service: UsersService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.service.listAll();
  }

  @Mutation((returns) => User)
  async addUser(
    @Args('userCreateInput') userCreateInput: UserCreateInput,
  ): Promise<User> {
    const user = await this.service.create(userCreateInput);
    return user;
  }
}
