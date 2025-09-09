import { User } from "generated/prisma";

export class FindUserDTO {
    email: string;
    username: string;
    role: string;

    constructor(user: User) {
        Object.assign(this, { email: user.email, username: user.username, role: user.role });
    }
}