import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DddDocument = Ddd & Document;

@Schema()
export class Ddd {
  @Prop()
  origin: string;

  @Prop()
  destiny: string;

  @Prop()
  price: number;
}

export const DddSchema = SchemaFactory.createForClass(Ddd);
