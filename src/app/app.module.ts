import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { MenuizquierdoComponent } from './menuizquierdo/menuizquierdo.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EstudiantesComponent,
    MenuizquierdoComponent,
    PiepaginaComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
