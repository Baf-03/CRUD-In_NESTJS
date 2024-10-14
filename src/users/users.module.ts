import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchama } from './Schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchama }]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
