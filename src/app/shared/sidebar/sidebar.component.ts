import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get historial(){
    return this.gifsService.historial;
  }

  buscarGif(textBusqueda: string){
    this.gifsService.buscarGif(textBusqueda);
  }

  ngOnInit(): void {}

}
