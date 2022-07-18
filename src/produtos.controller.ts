import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutosModel } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() produto: ProdutosModel) {
    return this.produtosService.create(produto);
  }

  @Get()
  findAll(): ProdutosModel[] {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): ProdutosModel {
    return this.produtosService.findOne(params.id);
  }

  @Put()
  update(@Body() produto: ProdutosModel): ProdutosModel {
    return this.produtosService.update(produto);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtosService.delete(params.id);
  }
}
