import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

    private posts = [
        {
            id: 1,
            userId: 1,
            title: '테스트 글제목1',
            votes: 1,
        },
        {
            id: 2,
            userId: 2,
            title: '테스트 글제목2',
            votes: 2,
        },
        {
            id: 3,
            userId: 2,
            title: '테스트 글제목3',
            votes: 3,
        },
        {
            id: 4,
            userId: 4,
            title: '테스트 글제목4',
            votes: 4,
        },
        {
            id: 5,
            userId: 4,
            title: '테스트 글제목5',
            votes: 5,
        },
        {
            id: 6,
            userId: 4,
            title: '테스트 글제목6',
            votes: 6,
        }
    ];

    async findAllByUserId(id: number) {
        return this.posts.filter(post => post.userId === id);
    }
}
