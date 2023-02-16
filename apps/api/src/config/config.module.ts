import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleNest } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModuleNest.forRoot({
      isGlobal: false,
      validationSchema: Joi.object({
        MONGO_DB_URI: Joi.string().required(),
        MONGO_DB_NAME: Joi.string().required(),
        API_PORT: Joi.number().required(),
        API_WEB_BASE_URL: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule {}
