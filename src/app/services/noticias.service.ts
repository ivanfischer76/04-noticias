import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;
  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    //console.log(query);
    return this.http.get<T>(query, {headers});
  }

  getTopHeadLines(){
    this.headlinesPage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&page=${this.headlinesPage}`);
    //return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=ar&apiKey=2f6ce47f72794357a6a4d9a95f209982');
  }

  getTopHeadlinesCategoria(categoria: string){
    if(this.categoriaActual == categoria){
      this.categoriaPage++;
    }else{
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&category=${categoria}&page=${this.categoriaPage}`);
    //return this.http.get('https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=2f6ce47f72794357a6a4d9a95f209982');
  }
}
