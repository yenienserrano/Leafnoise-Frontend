import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { PronosticoExtendidoComponent } from './pages/pronostico-extendido/pronostico-extendido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClimaComponent,
    HeaderComponent,
    PronosticoExtendidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
