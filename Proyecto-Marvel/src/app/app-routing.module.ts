import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ErrorComponent } from './componentes/error/error.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'contactanos', component: FormularioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
