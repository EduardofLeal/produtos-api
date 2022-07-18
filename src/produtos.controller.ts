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

@Controller('produtos')
export class ProdutosController {
  produtos: ProdutosModel[] = [
    new ProdutosModel('LIV01', 'Livro de TDD E BDD na prática', 29.9),
    new ProdutosModel('LIV02', 'Iniciando com flutter', 39.9),
    new ProdutosModel('LIV03', 'Inteligência artifical como serviço', 29.9),
  ];

  @Post()
  create(@Body() produto: ProdutosModel) {
    produto.id = 100;
    this.produtos.push(produto);
  }

  @Get()
  findAll(): ProdutosModel[] {
    return this.produtos;
  }

  @Get(':id')
  findOne(@Param() params): ProdutosModel {
    return this.produtos[0];
  }

  @Put()
  update(@Body() produto: ProdutosModel): ProdutosModel {
    return produto;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtos.pop();
  }
}
