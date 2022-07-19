import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProdutosModel } from './produto.model';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(ProdutosModel)
    private produtosModel: typeof ProdutosModel,
  ) {}

  async findAll(): Promise<ProdutosModel[]> {
    return await this.produtosModel.findAll();
  }

  async findOne(id: number): Promise<ProdutosModel> {
    return await this.produtosModel.findByPk(id);
  }

  async create(produto: ProdutosModel) {
    this.produtosModel.create(produto);
  }

  async update(produto: ProdutosModel): Promise<[number, ProdutosModel[]]> {
    const retorno = await this.produtosModel.update(produto, {
      returning: true,
      where: { id: produto.id },
    });

    return retorno;
  }

  async delete(id: number) {
    const livro: ProdutosModel = await this.findOne(id);
    livro.destroy();
  }
}
