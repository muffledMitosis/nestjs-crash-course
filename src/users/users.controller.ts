import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

	constructor(private usersService: UsersService) {}

	@Get()
	getUsers(@Query('name') name: string): User[] {
		return this.usersService.findAll(name);
	}

	@Get(':id')
	getUserById(@Param('id', ParseIntPipe) id: number): User {	//TODO: Auto number parsing
		console.log(typeof(id));
		const user = this.usersService.findById(id);
		if(!user) {
			throw new NotFoundException();
		}
		return user;
	}

	@ApiCreatedResponse({type: User})
	@Post()
	createUser(@Body() body: CreateUserDto): any {
		return this.usersService.createUser(body);
	}
}
