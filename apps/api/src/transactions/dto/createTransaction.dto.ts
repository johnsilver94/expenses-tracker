import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateTransactionDto implements ICreateTransaction {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}

export interface ICreateTransaction {
  text: string;
  amount: number;
}
