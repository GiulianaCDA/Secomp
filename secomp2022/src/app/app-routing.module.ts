import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MinicursosComponent } from './pages/minicursos/minicursos.component';
import { InscricoesComponent } from './pages/inscricoes/inscricoes.component';
import { CongressoComponent } from './pages/congresso/congresso.component';
import { MaratonaComponent } from './pages/maratona/maratona.component';
import { XadrezComponent } from './pages/xadrez/xadrez.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  //{ path: 'inscricao', component: InscricoesComponent },
  //{ path: 'congresso', component: CongressoComponent },
  //{ path: 'minicursos', component: MinicursosComponent },
  //{ path: 'maratona', component: MaratonaComponent},
  //{ path: 'xadrez', component: XadrezComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
