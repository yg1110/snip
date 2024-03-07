import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthEntity } from 'src/entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
