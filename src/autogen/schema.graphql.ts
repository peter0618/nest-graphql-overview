
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class Post {
    id: number;
    userId: number;
    title: string;
    votes?: number;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract userById(id: number): User | Promise<User>;
}

export class User {
    id: number;
    mobilePhone: string;
    name: string;
    email: string;
    role: Role;
    posts?: Post[];
}
