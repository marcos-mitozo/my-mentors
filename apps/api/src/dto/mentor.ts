import { ApiProperty } from "@nestjs/swagger";
import { Mentor } from "@prisma/client";

export class FindMentorDTO {
    @ApiProperty()
    bio: string;
    @ApiProperty()
    rating: number;

    constructor(mentor: Mentor) {
        Object.assign(this, mentor);
    }
}