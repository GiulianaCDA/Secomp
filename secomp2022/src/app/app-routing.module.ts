import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MinicursosComponent } from './pages/minicursos/minicursos.component';
import { InscricoesComponent } from './pages/inscricoes/inscricoes.component';
import { CongressoComponent } from './pages/congresso/congresso.component';
import { QrformComponent } from './pages/qrform/qrform.component';
import { MaratonaComponent } from './pages/maratona/maratona.component';


function palestraRouteMatcher(url: UrlSegment[]) {
  const urlPath = url[0].path.split('-');

  if (urlPath.length === 2 && urlPath[0] === 'palestra') {
    const id = parseInt(urlPath[1]);
    if (!isNaN(id)) {
      return { consumed: url };
    }
  }
  return null;
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { matcher: palestraRouteMatcher, component: QrformComponent },
  { path: 'maratona', component: MaratonaComponent},
  //{ path: 'inscricao', component: InscricoesComponent },
  //{ path: 'congresso', component: CongressoComponent },
  //{ path: 'minicursos', component: MinicursosComponent },
  //{ path: 'xadrez', component: XadrezComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
