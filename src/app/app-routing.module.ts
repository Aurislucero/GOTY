import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyComponent } from './pages/copy/copy.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'goty',component:CopyComponent},
  {path:'**',pathMatch:'full',redirectTo:'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
