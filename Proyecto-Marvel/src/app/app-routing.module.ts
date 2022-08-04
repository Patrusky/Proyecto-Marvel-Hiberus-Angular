import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'comics', component:ComicsComponent},
  {path:'heroe', component:PersonajesComponent},
  {path:'contactanos', component:FormularioComponent},
  {path:'**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
