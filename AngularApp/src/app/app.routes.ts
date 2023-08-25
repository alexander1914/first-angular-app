import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
// import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

// Routes: objeto que serve para definir, as routas no seu projeto angular 

export const rootRouterConfig: Routes = [
    // path: é uma propriedade do objeto routes para mapear as routas
    
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    // { path: 'produtos', component: ListaProdutoComponent },
    // { path: 'produto-detalhe/:id', component: ListaProdutoComponent }
];