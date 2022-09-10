import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscricao', component: HomeComponent },
  { path: 'minicursos', component: HomeComponent },
  { path: 'campeonato', component: HomeComponent },
  { path: 'sejavoluntario', component: VoluntariosComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
