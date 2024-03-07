import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEntity } from 'src/entities/auth.entity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private booksService: AuthService) {}

  @ApiOperation({
    summary: '로그인',
    description: `
      "id" : 0,\n
      "name" : "string"\n
    `,
  })
  @Post()
  async create(@Body() book: AuthEntity): Promise<AuthEntity> {
    return await this.booksService.create(book);
  }

  @Get()
  async findAll(): Promise<AuthEntity[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AuthEntity> {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() book: AuthEntity,
  ): Promise<number> {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.booksService.remove(+id);
  }
}
