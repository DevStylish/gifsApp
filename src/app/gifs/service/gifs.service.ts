import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private urlApi: string = "api.giphy.com/v1/gifs/search";
  private apiKey: string = "pXOLSeSM9CG96mygohVAHR9xkF7FPoFJ";
  private historialBusqueda: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

  }

  buscarGif(textGif: string = ''){
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', textGif);

    this.http.get<SearchGifsResponse>(`${this.urlApi}/search`, {params}).subscribe((resp) => {
      this.resultados = resp.data;
    });
  }
}
