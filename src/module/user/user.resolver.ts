import { Query, Resolver } from '@nestjs/graphql';
import {User} from "../../autogen/schema.graphql";

@Resolver('User')
export class UserResolver {
  @Query()
  async getAll(): Promise<User[]> {
    return [
      {
        id: '1',
        name: 'Peter',
        age: 36,
      },
      {
        id: '2',
        name: 'Grace',
        age: 34,
      },
    ];
  }
}
