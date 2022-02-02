import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';
import { ResultadoComponent } from '../resultado/resultado.component';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  textBusqueda = "";

  constructor(private gifService: GifsService) { }

  realizarBusqueda(){
    console.log(this.textBusqueda);
    this.gifService.buscarGif(this.textBusqueda);
  }

  ngOnInit(): void {}

}
