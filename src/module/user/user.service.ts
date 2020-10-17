import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import {User} from "../../autogen/schema.graphql";

@Injectable()
export class UserService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async findOneById(id: number): Promise<User> {
    try {
      const rows = await this.connection.query(`
SELECT id  
      ,mobile_phone AS mobilePhone
      ,user_name    AS name
      ,email
      ,role
  FROM user_master
 WHERE id = ?`, [id]);
      return rows[0];
    } catch (e) {
      console.log(e);
    }
  }

  async findAll(): Promise<User[]> {
    try {
        return await this.connection.query(`
SELECT id  
      ,mobile_phone AS mobilePhone
      ,user_name    AS name
      ,email
      ,role
  FROM user_master`);
    } catch (e) {
      console.log(e);
    }
  }
}
