import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://bilal:bilal@cluster0.sddh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}