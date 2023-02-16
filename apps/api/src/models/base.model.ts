import { ObjectId } from 'mongoose';

export interface BaseModel {
  _id: ObjectId;
  __v: number;
}
