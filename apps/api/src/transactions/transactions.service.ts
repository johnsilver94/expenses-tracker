import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<TransactionDocument>,
  ) {}

  public async create(
    createTransactionData: Partial<Transaction>,
  ): Promise<Transaction> {
    return this.transactionModel.create(createTransactionData);
  }

  public async getAll(): Promise<Transaction[]> {
    return this.transactionModel.find();
  }

  public async getById(id: string): Promise<Transaction> {
    const transaction = await this.transactionModel.findById(id);
    if (transaction) {
      return transaction;
    }

    throw new HttpException(
      'Transaction with this id does not exists',
      HttpStatus.NOT_FOUND,
    );
  }

  public async deleteById(id: string): Promise<void> {
    const transaction = await this.transactionModel.findByIdAndRemove(id);
    if (transaction) {
      return;
    }
    throw new HttpException(
      'Transaction with this id does not exists',
      HttpStatus.NOT_FOUND,
    );
  }

  public async updateById(
    id: string,
    updateTransactionData: Partial<Transaction>,
  ): Promise<Transaction> {
    const transaction = this.transactionModel.findByIdAndUpdate(
      id,
      updateTransactionData,
      { new: true },
    );
    if (transaction) {
      return transaction;
    }

    throw new HttpException(
      'Transaction with this id does not exists',
      HttpStatus.NOT_FOUND,
    );
  }
}
