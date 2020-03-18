import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsignacionComponent } from './consignacion/consignacion.component';
import { RetiroComponent } from './retiro/retiro.component';

import { NuevosaldoComponent } from './nuevosaldo/nuevosaldo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    MenuComponent,
    ConsultaComponent,
    ConsignacionComponent,
    RetiroComponent,
    NuevosaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule, 
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
