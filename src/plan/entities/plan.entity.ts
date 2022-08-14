import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanDocument = Plan & Document;


@Schema()
export class Plan {
  @Prop()
  plan: string;

  @Prop()
  timeMinutes: number;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);