import { Injectable } from '@nestjs/common';

type User = {
    userId: number,
    username: string,
    password: string
}

@Injectable()
export class UserService {
    user: User[] = [
        {userId: 1, username: 'aminbista', password: 'aminpassword'},
        {userId: 2, username: 'jhondoe', password: 'jhonpassword'}
    ]

    getAllUser() {
        return this.user;
    }

    getUser(username: string) {
        return this.user.find((user) => user.username === username);
    }
}
