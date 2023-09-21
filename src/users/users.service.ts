import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UsersService {

    private users: Array<User> = [];

    create(user: User): User  {
        this.users.push(user);
        return user;
    }

    findAll(): Array<User> {
        return this.users;
    }
}
