import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstudiantesService, itfFstudiante } from '../servicios/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  providers: [EstudiantesService]
})

export class EstudiantesComponent implements OnInit {
  @Input('mi-universidad') universidad: string;
  @Output() selecionado = new EventEmitter();
  titulo = "lista de estudiantes";
  estudiantes: string[];
  objEstudiante: itfFstudiante[];
  redondeadas = false;
  padding = true;

  cambiar(evento) {
    this.titulo = evento.target.value;
  }

  getEstudiante(): void {
    this.estudiantesService.getEstudiante()
      .subscribe(
        resultArray => this.objEstudiante = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  clickEnEstudiante(evento): void {
    this.selecionado.emit({ nombre: evento.target.textContent });
  }

  constructor(private estudiantesService: EstudiantesService) {
    console.log("llego el servicio")
    this.estudiantes = estudiantesService.getPersonas('la universidad nacional');
  }

  ngOnInit() {
    this.getEstudiante();
  }

}
