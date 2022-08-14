import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:mTXFR9wTdfPNyA89@api-telzir.n4fv0fe.mongodb.net/?retryWrites=true&w=majority'),
    DddModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
