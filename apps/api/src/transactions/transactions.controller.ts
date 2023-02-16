import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FindOneByIdDto } from 'shared/dto/findOneById.dto';
import { MongooseClassSerializerInterceptor } from 'utils/mongooseClassSerializer.interceptor';
import { CreateTransactionDto } from './dto/createTransaction.dto';

import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
@UseInterceptors(MongooseClassSerializerInterceptor(Transaction))
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async createTransaction(
    @Body() transaction: CreateTransactionDto,
  ): Promise<Transaction> {
    return this.transactionsService.create(transaction);
  }

  @Get()
  async geTransactions(): Promise<Transaction[]> {
    return this.transactionsService.getAll();
  }

  @Get(':id')
  async getTransaction(@Param() { id }: FindOneByIdDto): Promise<Transaction> {
    return this.transactionsService.getById(id);
  }

  @Patch(':id')
  async updateTransaction(
    @Param() { id }: FindOneByIdDto,
    @Body() recipe: any,
  ): Promise<Transaction> {
    return this.transactionsService.updateById(id, recipe);
  }

  @Delete(':id')
  async deleteTransaction(@Param() { id }: FindOneByIdDto): Promise<void> {
    console.log(id);
    return this.transactionsService.deleteById(id);
  }
}
