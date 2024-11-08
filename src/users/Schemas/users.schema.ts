import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type userDocument = User & Document

@Schema()
export class User{
    @Prop({
        required:true
    })
    name:string;

    @Prop({
        required:true,
        unique:true
    })
    email:string;

    @Prop({
        required:true
    })
    password:string
}

export const userSchama = SchemaFactory.createForClass(User)