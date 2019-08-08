import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoCursoService } from '../../services/AlumnoCurso.service';
import { AlumnoCurso } from '../../interfaces/AlumnoCurso';

@Component({
  selector: 'app-notas-alumno',
  templateUrl: './notas-alumno.page.html',
  styleUrls: ['./notas-alumno.page.scss'],
})
export class NotasAlumnoPage implements OnInit {

  public alumno: AlumnoCurso;
  private idAlumno: number;

  constructor(
    private route: ActivatedRoute,
    private alumnoSrv: AlumnoCursoService
  ) { }

  ngOnInit() {

    this.idAlumno = this.route.snapshot.params.idAlumno

    this.alumno = this.alumnoSrv.getAlumnoById(this.idAlumno);
    console.log(this.alumno.notasSet)

  }

}
