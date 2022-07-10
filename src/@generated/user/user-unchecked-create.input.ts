import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  @Validator.MinLength(3)
  name?: string;

  @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
}
