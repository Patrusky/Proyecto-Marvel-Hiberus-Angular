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
import { PersonajeDetalleComponent } from './componentes/personaje-detalle/personaje-detalle.component';
import { PersonajesService } from './services/personajes.service';
import { FormsModule } from '@angular/forms';



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
    PersonajeDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
