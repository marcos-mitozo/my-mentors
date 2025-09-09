import { HttpException, HttpStatus } from "@nestjs/common";
import { IUser, IUserPayload } from "src/constants/user-types";

export default async function userValidator(payload: IUserPayload) {
    const missingFields: Array<string> = []

    if(!payload.email) {
        missingFields.push('email')
    }

    if(!payload.passwordHash) { 
        missingFields.push('password')
    }

    if(!payload.username) {
        missingFields.push('username')
    }
    
    if(missingFields.length > 0) {
        throw new HttpException(`The following required fields are missing: ${missingFields.join(', ')}`, HttpStatus.BAD_REQUEST)
    }
}