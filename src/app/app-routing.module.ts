import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsignacionComponent } from './consignacion/consignacion.component';
import { RetiroComponent } from './retiro/retiro.component';
import { NuevosaldoComponent } from './nuevosaldo/nuevosaldo.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/consultar', component:ConsultaComponent},
  {path:'menu/consignacion', component:ConsignacionComponent},
  {path:'menu/retiro', component:RetiroComponent},
  {path:'menu/retiro/nuevosaldo', component:NuevosaldoComponent},
  {path:'menu/consignacion/nuevosaldo', component:NuevosaldoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
