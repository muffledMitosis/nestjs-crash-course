import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateUserDto {
	@ApiProperty()
	@MaxLength(10)
	@IsAlphanumeric()
	name: string;

	@ApiProperty({required: false})
	age?: number;
}