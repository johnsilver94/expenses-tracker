import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { TransactionsModule } from 'transactions/transactions.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule, TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
