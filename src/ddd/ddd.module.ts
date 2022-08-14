import { Module } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ddd, DddSchema } from './entities/ddd.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ddd.name , schema: DddSchema }])],
  controllers: [DddController],
  providers: [DddService]
})
export class DddModule {}
