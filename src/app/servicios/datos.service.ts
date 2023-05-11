import { Injectable } from '@angular/core';
//Suscribe a datos y que reciba respuesta asíncrona
import { Observable} from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //http es un alias
  constructor(private http:HttpClient) { }
  //Método observable, devuelve datos
  getDatos():Observable <any> {

    return this.http.get('.assets/db/datos.json');

  }
}
