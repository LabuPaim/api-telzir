import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DddModule } from './ddd/ddd.module';
import { PlanModule } from './plan/plan.module';
import { RedirectController } from './redirect/redirect.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:mTXFR9wTdfPNyA89@api-telzir.n4fv0fe.mongodb.net/?retryWrites=true&w=majority'),
    DddModule,
    PlanModule
  ],
  controllers: [RedirectController],
  providers: [],
})
export class AppModule {}
