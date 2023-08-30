import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from './produto';
import { Observable } from 'rxjs';

// @Injectable: é utilizado para angular entender que essa classe é um serviço,
// quando for injetar no construtor da classe o angular sabe criar essa classe.

// OBS: É necessário registrar o serviço na app.module do seu projeto
// dentro de providers o nome da sua classe ex:ProdutosService.

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient){}

  protected UrlServiceV1: string = " http://localhost:3000/";

  obterProdutos(): Observable<Produto[]> {
    // HttpClient: nos permite buscar dados de uma fonte externa, exemplo como em um database.
    // Observable: ele é um callback assim que receber o resultado me avise
     return this.http
            .get<Produto[]>(this.UrlServiceV1 + "produtos")
  }
}
