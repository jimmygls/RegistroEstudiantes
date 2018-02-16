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

  clickEnEstudiante(evento): void {
    this.selecionado.emit({ nombre: evento.target.textContent });
  }

  constructor(private estudiantesService:EstudiantesService) { 
    console.log("llego el servicio")
    //this.estudiantes=estudiantesService.ListaDeEstudiantes('la universidad nacional');
    this.estudiantes=estudiantesService.getPersonas('la universidad nacional');
  }

  ngOnInit() {
  }
}
