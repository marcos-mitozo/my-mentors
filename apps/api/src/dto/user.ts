import { User } from "@prisma/client";
import { Exclude } from 'class-transformer';

export class FindUserDTO {
    email: string;
    username: string;
    role: string;

    @Exclude()
    passwordHash: string;

    @Exclude()
    id: string;

    constructor(user: User) {
        Object.assign(this, user);
    }
}