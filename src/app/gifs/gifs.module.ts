import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadoComponent,
    GifsPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BusquedaComponent,
    ResultadoComponent,
    GifsPageComponent
  ]
})

export class GifsModule { }