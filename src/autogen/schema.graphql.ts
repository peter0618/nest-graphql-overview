
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Post {
    id: number;
    userId: number;
    title: string;
    votes?: number;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract getUserById(id: number): User | Promise<User>;
}

export class User {
    id: number;
    name: string;
    age: number;
    posts?: Post[];
}
