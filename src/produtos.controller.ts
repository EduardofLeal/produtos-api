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
  async create(@Body() produto: ProdutosModel) {
    return this.produtosService.create(produto);
  }

  @Get()
  async findAll(): Promise<ProdutosModel[]> {
    return await this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<ProdutosModel> {
    return this.produtosService.findOne(params.id);
  }

  @Put()
  async update(
    @Body() produto: ProdutosModel,
  ): Promise<[number, ProdutosModel[]]> {
    return await this.produtosService.update(produto);
  }

  @Delete(':id')
  async delete(@Param() params) {
    await this.produtosService.delete(params.id);
  }
}
