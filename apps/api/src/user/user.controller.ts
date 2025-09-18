import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import * as userTypes from 'src/constants/user-types';
import userValidator from './user.validator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async createUser(@Body() user: userTypes.IUserPayload) {
    await userValidator(user);
    await this.userService.createUser(user as userTypes.IUser);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  async findUser(@Param('username') username: string) {
    return await this.userService.findByUsername(username);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/list/mentors')
  async listMentors() {
    return await this.userService.listMentors();
  }
}
