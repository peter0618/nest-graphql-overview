import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private users = [
        {
            id: 1,
            name: 'Peter',
            age: 36,
        },
        {
            id: 2,
            name: 'Grace',
            age: 34,
        },
        {
            id: 3,
            name: 'Thor',
            age: 40,
        },
        {
            id: 4,
            name: 'Tony',
            age: 44,
        },
        {
            id: 5,
            name: 'Hulk',
            age: 41,
        }
    ];

    async findOneById(id: number) {
        const rs =  this.users.filter(user => user.id === id);
        return rs[0];
    }

    async findAll() {
        return this.users;
    }
}
