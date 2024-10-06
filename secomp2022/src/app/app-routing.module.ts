import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { QrformComponent } from './pages/qrform/qrform.component';
import { MaratonaComponent } from './pages/maratona/maratona.component';


function palestraRouteMatcher(url: UrlSegment[]) {
  const urlPath = url[0].path.split('-');

  if (urlPath.length === 2 && urlPath[0] === 'palestra') {
    const id = urlPath[1];
    if (id) {
      return { consumed: url };
    }
  }
  return null;
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { matcher: palestraRouteMatcher, component: QrformComponent },
  { path: 'maratona', component: MaratonaComponent },
  { path: 'inscricao', component: InscricaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
