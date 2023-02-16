import { BaseModel } from 'models/base.model';
import { TransactionModel } from 'models/transaction.model';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose, Type } from 'class-transformer';
import { ObjectId } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
@Expose()
export class Transaction implements BaseModel, TransactionModel {
  id: string;

  @Exclude()
  _id: ObjectId;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Type(() => Date)
  createdAt: Date;

  @Type(() => Date)
  updatedAt: Date;

  @Exclude()
  __v: number;
}

export type TransactionDocument = Transaction & Document;

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
