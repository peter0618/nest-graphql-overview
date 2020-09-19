import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import {PostModule} from "../post/post.module";

@Module({
  imports: [PostModule],
  providers: [UserResolver, UserService],
})
export class UserModule {}
