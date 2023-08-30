import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'  
})
export class ListaProdutoComponent implements OnInit {
  
  // Implementando a injeção de serviço 
  constructor(private produtoService: ProdutosService) {}

  public produtos: Produto[] = [];

  ngOnInit(){
    this.produtoService.obterProdutos()
    
    //subscribe: é um metódo para sobescrever os dados 
    .subscribe(
        produtos =>{
          this.produtos = produtos
          console.log(produtos);          
        },
        error => console.error()        
      );
  }

}
