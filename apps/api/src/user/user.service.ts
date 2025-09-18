import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import { IUser } from 'src/constants/user-types';
import { FindUserDTO } from 'src/dto/user';
import { v4 } from 'uuid';

const prisma = new PrismaClient()

@Injectable()
export class UserService {
    async createUser(user: IUser): Promise<IUser> {
        const id = v4();
        const passwordHash = await argon2.hash(user.passwordHash)
        try {
            return await prisma.user.create({
                data: { ...user, id, passwordHash, role: 'ADMIN' }
            })
        } catch (e) {
            console.log(e)
            throw new HttpException('Unhandled Exception', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async findByUsername(username: string): Promise<FindUserDTO | null> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    username
                }
            })
            if (!user) {
                throw new NotFoundException(`Unable to find a user with the username ${username}`)
            } else {
                const responseUser = new FindUserDTO(user)
                return responseUser
            }
        } catch (e) {
            throw e
        }
    }

    async listMentors(): Promise<Array<FindUserDTO> | null> {
        try {
            const mentors = await prisma.user.findMany({
                where: {
                    role: "MENTOR"
                }
            })
            const listOfMentorsResponse = mentors.map(mentor => new FindUserDTO(mentor))
            return listOfMentorsResponse
        } catch (e) {
            throw e
        }
    }
}
