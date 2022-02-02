import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private urlApi: string = "https://api.giphy.com/v1/gifs";
  private apiKey: string = "pXOLSeSM9CG96mygohVAHR9xkF7FPoFJ";
  private historialBusqueda: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {}

  get historial(){
    this.historialBusqueda = JSON.parse(localStorage.getItem('busquedas')!) || [];
    return [...this.historialBusqueda];
  }

  buscarGif(textGif: string = ''){
    textGif = textGif.trim();
    
    if(textGif.length != 0){
      this.historialBusqueda = JSON.parse(localStorage.getItem('busquedas')!) || [];

      console.log(this.historialBusqueda);

      if(!this.historialBusqueda.includes(textGif)){

        this.historialBusqueda.unshift(textGif);
      }

      if(this.historialBusqueda.length > 10){
        this.historialBusqueda.splice(this.historialBusqueda.length-1);
      }

      localStorage.setItem('busquedas', JSON.stringify(this.historialBusqueda));

      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', textGif);

      this.http.get<SearchGifsResponse>(`${this.urlApi}/search`, {params}).subscribe((resp) => {
        this.resultados = resp.data;
      });
    }
  }
}
