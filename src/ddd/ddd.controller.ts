import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { DddService } from './ddd.service';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';

@Controller('ddd')
export class DddController {
  constructor(private readonly dddService: DddService) {}

  @Post()
  @ApiBody({type: CreateDddDto})
  create(@Body() createDddDto: CreateDddDto) {
    return this.dddService.create(createDddDto);
  }

  @Get()
  @ApiBody({type: CreateDddDto})
  findAll() {
    return this.dddService.findAll();
  }

  @Get(':id')
  @ApiBody({type: CreateDddDto})
  findOne(@Param('id') id: string) {
    return this.dddService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({type: CreateDddDto})
  update(@Param('id') id: string, @Body() updateDddDto: UpdateDddDto) {
    return this.dddService.update(id, updateDddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dddService.remove(id);
  }
}
