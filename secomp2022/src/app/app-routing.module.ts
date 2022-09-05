import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscricao', component: HomeComponent },
  { path: 'minicursos', component: HomeComponent },
  { path: 'campeonato', component: HomeComponent },
  { path: 'voluntario', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
