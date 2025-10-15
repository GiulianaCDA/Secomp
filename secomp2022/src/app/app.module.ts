import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { QrformComponent } from './pages/qrform/qrform.component';
import { SecompInputComponent } from './components/secomp-input/secomp-input.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { CongressoComponent } from './pages/congresso/congresso.component';
import { MaratonaComponent } from './pages/maratona/maratona.component';
import { MinicursosComponent } from './pages/minicursos/minicursos.component';
import { XadrezComponent } from './pages/xadrez/xadrez.component';
import { _404Component } from './pages/_404/_404.component';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        FooterComponent,
        QrformComponent,
        SecompInputComponent,
        InscricaoComponent,
        CongressoComponent,
        MaratonaComponent,
        MinicursosComponent,
        XadrezComponent,
        _404Component,
        EventCardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
