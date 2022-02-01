import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  mostrarGifs(gifs: Gif[]){
    let col = document.querySelector("col");

    let numGifs: any = col?.childElementCount;

    for(let i = 0; i < numGifs; i++){
      col?.children[0].remove();
    }

    let test = document.createElement("P");

    test.textContent = "Test";

    col?.appendChild(test);
  }

  ngOnInit(): void {
  }

}
