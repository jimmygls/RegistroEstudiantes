import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EstudiantesService} from '../servicios/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  providers:[EstudiantesService]
})

export class EstudiantesComponent implements OnInit {
  @Input('mi-universidad') universidad: string;
  @Output() selecionado = new EventEmitter();
  titulo = "lista de estudiantes";
  estudiantes:string[];
  redondeadas = false;
  padding = true;

  cambiar(evento) {
    this.titulo = evento.target.value;
  }

  listadeestudiantes(): Array<string> {
    if (this.universidad == 'la universidad nacional') {
      return ['Estudiante numero uno', 'Estudiante numero dos', 'Estudiante numero tres'];
    }
    else {
      return ['Estudiante para uno'];
    }

  }

  clickEnEstudiante(evento): void {
    this.selecionado.emit({ nombre: evento.target.textContent });
  }

  constructor(estudiantesSrvice:EstudiantesService) { 

    this.estudiantes=estudiantesSrvice.ListaDeEstudiantes('la universidad nacional');
  }

  ngOnInit() {
  }

}
