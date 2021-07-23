import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import {CatService} from '../services/cats.service'
import { CreateCatDto }  from '../dto/create-cat.dto';
import {UpdateCatDto} from '../dto/update-cat.dto';

//-- with full nest feature
@Controller('cats')
export class CatController {
  //-- controller injection
  constructor(private readonly catService: CatService) {}

  //-- with service layer
  @Get()
  getCats(): string {
    return this.catService.getCats();
  }

  //-- without service layer
  @Post()
  createCats(@Body() createCatDto: CreateCatDto): string {
    return "created cat"
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }
}

//-- with express
@Controller('cats')
export class CatsController {
  @Post()
  create(@Res({ passthrough: true }) res: Response) {
    // @ts-ignore
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    // @ts-ignore
    res.status(HttpStatus.OK).json([]);
  }
}