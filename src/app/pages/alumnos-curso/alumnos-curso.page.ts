import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoCursoService } from '../../services/AlumnoCurso.service';
import { AlumnoCursoType } from '../../interfaces/AlumnoCurso';

@Component({
  selector: 'app-alumnos-curso',
  templateUrl: './alumnos-curso.page.html',
  styleUrls: ['./alumnos-curso.page.scss'],
})
export class AlumnosCursoPage implements OnInit {


  params = {
    cedula: '',
    idPeriodo: 0,
    cursoNombre: '',
    idMateria: 0
  }

  public almnsCurso: AlumnoCursoType[];


  constructor(
    private route: ActivatedRoute,
    private almnCursoSrv: AlumnoCursoService
  ) { }

  async ngOnInit() {

    this.params.cedula = this.route.snapshot.params.cedula
    this.params.idPeriodo = this.route.snapshot.params.idPeriodo
    this.params.cursoNombre = this.route.snapshot.params.cursoNombre
    this.params.idMateria = this.route.snapshot.params.idMateria

    this.almnsCurso = await this.almnCursoSrv.getAlumnoCurso(this.params)
      .toPromise()
      .then(data => data.data.alumnosCurso);






  }

}
