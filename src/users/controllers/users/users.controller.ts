import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Validate } from 'class-validator';
import { createUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    
    @Post("/register")
    @UsePipes(new ValidationPipe())
    createUserDto(
        @Body() userData:createUserDto
    ){
        return this.userService.createUser(userData)
    }


    @Get("getuser/:id")
    @UsePipes(new ValidationPipe())
    getUser(
        @Param("id") id:string
    ){
        console.log("mae hit howeeee")
        return this.userService.findUser(id)
    }

    @Get("allUsers")
    getAllUsers(){
        console.log("mae hit howa")
        return this.userService.getAllUsers()
    }

    @Put("update/:id")
    updateUser(
        @Body() userData:createUserDto,
        @Param("id") id:string
    ){
        return this.userService.updateUser(userData,id)
    }
    @Delete("delUser/:id")
    delUser(
        @Param("id") id:string
    ){
        return this.userService.delUsers(id)
    }
}