import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BillModule } from './bill/bill.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://yusrasenimdede:senim8695.@cluster0.3xgnzsa.mongodb.net/pos-database?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    CategoryModule,
    ProductModule,
    BillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
