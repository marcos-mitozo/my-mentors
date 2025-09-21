import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { Exclude } from 'class-transformer';

export class FindUserDTO {
    @ApiProperty({ example: 'john.doe@gmail.com', description: 'The email of the user' })
    email: string;
    @ApiProperty({ example: 'johndoe', description: 'The username used to signin' })
    username: string;
    @ApiProperty({ example: 'MENTOR', description: 'Defines if the user is a MENTOR or a MENTEE' })
    role: string;

    @Exclude()
    passwordHash: string;

    @Exclude()
    id: string;

    constructor(user: User) {
        Object.assign(this, user);
    }
}