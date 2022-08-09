import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { PersonajesService } from './services/personajes.service';
import { FormsModule } from '@angular/forms';
import { ComicsService } from './services/comics.service';
import { PersonajeDetallesComponent } from './componentes/personaje-detalles/personaje-detalles.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ComicsComponent,
    FormularioComponent,
    ErrorComponent,
    PersonajesComponent,
    PersonajeDetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PersonajesService,
    ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
