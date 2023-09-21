import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UsersService } from './users.service';
import { get } from 'http';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

   @Get()
   index(): Array<User> {
    return this.usersService.findAll();
   }
   
    @Post()
    create(@Body() user: User): User {
        return this.usersService.create(user)
    }
}
