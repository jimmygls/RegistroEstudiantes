import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export class EstudiantesService {

  ListaDeEstudiantes(universidad): Array<string> {
    if (universidad == 'la universidad nacional') {
      return ['Jimmy numero uno', 'Pedro numero dos', 'Saulo numero tres'];
    }
    else {
      return ['Estudiante para uno'];
    }
  }
  
  constructor(private http: HttpModule) {}
    
  getEstudiante(){ 
      //retunr this.http..get('api/Personas').toPromise()
    }
    
  }
