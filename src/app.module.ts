import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './categories/category.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:XOAUz2NhkBio5hVP@cluster0-sqxxz.gcp.mongodb.net/delivery?retryWrites=true&w=majority',
      { useFindAndModify: false }),
    CategoryModule,
    DeliveryModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
