import { Injectable } from '@nestjs/common';
import { ProdutosModel } from './produto.model';

@Injectable()
export class ProdutosService {
  produtos: ProdutosModel[] = [
    new ProdutosModel('LIV01', 'Livro de TDD E BDD na prática', 29.9),
    new ProdutosModel('LIV02', 'Iniciando com flutter', 39.9),
    new ProdutosModel('LIV03', 'Inteligência artifical como serviço', 29.9),
  ];

  findAll(): ProdutosModel[] {
    return this.produtos;
  }

  findOne(id: number): ProdutosModel {
    return this.produtos[0];
  }

  create(produto: ProdutosModel) {
    this.produtos.push(produto);
  }

  update(produto: ProdutosModel): ProdutosModel {
    return produto;
  }

  delete(id: number) {
    this.produtos.pop();
  }
}
