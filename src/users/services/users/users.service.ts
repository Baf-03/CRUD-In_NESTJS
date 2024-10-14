import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { createUserDto } from 'src/users/dtos/createUser.dto';
import { userDocument } from 'src/users/Schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel("User") private userModel:Model<userDocument>){}

   public async createUser(userData:createUserDto):Promise<userDocument>{
    console.log(userData.email)
        const userExist  = await this.userModel.findOne({email:userData.email})
        console.log(userExist)
        if(userExist){
            throw new HttpException("user already exists dumb dumb ",400);
        }
        const newUser = new this.userModel(userData);
        return await newUser.save()
   }

  public async findUser(id:string):Promise<userDocument>{
        try{
            if (!Types.ObjectId.isValid(id)) {
                throw new BadRequestException('Invalid ID format');
            }

            const findUser = await this.userModel.findById(id);
            console.log(findUser)
            if(!findUser){
                throw new NotFoundException("user not found!")
            }
            return findUser
        }catch(err){
            return err
        }
    }

    public async getAllUsers():Promise<userDocument[]>{
        return this.userModel.find()
    }

    public async updateUser(userData:createUserDto,id:string):Promise<userDocument>{
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid ID format');
        }
        const userUpdate = await this.userModel.findByIdAndUpdate(id,userData,{new:true}).exec();
        if(!userUpdate){
             throw new NotFoundException("user not found")
        }
        return userUpdate
     }


    public async delUsers(id:string):Promise<string>{
        const userExist = await this.userModel.findByIdAndDelete(id);
        if(!userExist){
            throw new NotFoundException("user not found");
        }
        return "user deleted successfully;"
    }

}
