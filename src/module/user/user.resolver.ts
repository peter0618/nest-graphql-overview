import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import { User } from '../../autogen/schema.graphql';
import { UserService } from './user.service';
import { PostService } from '../post/post.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService, private readonly postService: PostService) {}

  @Query('users')
  async getAll(): Promise<User[]> {
    console.log(`getAll()`);
    return await this.userService.findAll();
  }

  @Query('userById')
  async getById(@Args('id') id: number): Promise<User> {
    console.log(`getById(id: ${id})`);
    return await this.userService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    console.log(`posts(user: ${JSON.stringify(user)})`);
    const { id } = user;
    return await this.postService.findAllByUserId(id);
  }
}
