import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";


@Injectable()
export class EstudiantesService {

  private url = "http://localhost:57255/api/Personas";
  data: Array<string>;

  private ListaDeEstudiantes(universidad): Array<string> {
    if (universidad == 'la universidad nacional') {
      return ['Jimmy numero uno', 'Pedro numero dos', 'Saulo numero tres'];
    }
    else {
      return ['Estudiante para uno'];
    }
  }

  constructor(private http: Http) {
  }

  public getPersonas(universidad): Array<string> {

    return this.ListaDeEstudiantes(universidad);

  }

  getEstudiante(): Observable<itfFstudiante[]> {
    return this.http.get(this.url).map((response: Response) => {
      return <itfFstudiante[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

export interface itfFstudiante {
  Apellido: number;
  IdPersona: number;
  Nombre: string;
  Tel: string;
}

