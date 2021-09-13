import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inyectar el servicio
  constructor( private http: HttpClient ) { }

  //creamos metodo
  getUsuarios() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }


}
