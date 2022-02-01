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

  constructor(private gifService: GifsService) { }

  realizarBusqueda(event: any){
    
  }

  ngOnInit(): void {}

}
