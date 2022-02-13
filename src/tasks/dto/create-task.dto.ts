import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty()
    name: string;
    @ApiProperty({required: false})
    age?: number;
}