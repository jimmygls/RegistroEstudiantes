import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EstudiantesService {

  public url: string;
  data :any={};
  
  private ListaDeEstudiantes(universidad): Array<string> {
   
    if (universidad == 'la universidad nacional') {
      return ['Jimmy numero uno', 'Pedro numero dos', 'Saulo numero tres'];
    }
    else {
      return ['Estudiante para uno'];
    }
  }
  

  constructor(private http: HttpModule) {
    this.url = "http://localhost:57255/api/";
  }

  public getPersonas(universidad):Array<string>{
   
    return this.ListaDeEstudiantes(universidad);
    //this.http.get(this.url + 'Personas').map((res:Response)=> res.json());
  }
  
}


