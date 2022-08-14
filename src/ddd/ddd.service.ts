import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ddd, DddDocument } from './entities/ddd.entity';

@Injectable()
export class DddService {

  constructor(@InjectModel(Ddd.name) private dddModel: Model<DddDocument>) {}

  create(createDddDto: CreateDddDto) {
    const ddd = new this.dddModel(createDddDto);
    return ddd.save()
  }

  findAll() {
    return this.dddModel.find();
  }

  findOne(id: string) {
    return this.dddModel.findById(id);
  }

  update(id: string, updateDddDto: UpdateDddDto) {
    return this.dddModel.findByIdAndUpdate({_id:id}, {$set: updateDddDto},{new: true});
  }

  remove(id: string) {
    return this.dddModel.deleteOne({_id:id}).exec();
  }
}
