import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Res, SetMetadata, UseGuards } from '@nestjs/common';
import { create } from 'domain';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private service: CatsService) { }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.service.getAllCats();
  }

  // @Get(':id')
  // findCat(@Param('id',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) param): Cat {
  //   return this.service.findCat(param);
  // }

  @Post()
  addCat(@Body() createCatDto: CreateCatDto) {
    this.service.addCat(createCatDto);
  }
}
