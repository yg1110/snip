import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfigProvider implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: process.env.RDS_HOST,
      port: parseInt(process.env.RDS_PORT, 10),
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      synchronize: process.env.RDS_SYNCHRONIZE === 'true',
      logging: process.env.RDS_LOGGING === 'true',
      autoLoadEntities: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      timezone: 'Asia/Seoul',
    };
  }
}
