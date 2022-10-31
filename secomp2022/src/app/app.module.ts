import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { SecompInputComponent } from './components/secomp-input/secomp-input.component';
import { InscricoesComponent } from './pages/inscricoes/inscricoes.component';
import { CongressoComponent } from './pages/congresso/congresso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    VoluntariosComponent,
    SecompInputComponent,
    InscricoesComponent,
    CongressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
