import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoCurso } from '../../interfaces/AlumnoCurso';
import { AlumnoCursoService } from '../../services/AlumnoCurso.service';

@Component({
  selector: 'app-alumnos-curso',
  templateUrl: './alumnos-curso.page.html',
  styleUrls: ['./alumnos-curso.page.scss'],
})
export class AlumnosCursoPage implements OnInit {

  public cedulaDocente: string;
  public cursoNombre: string;
  public idPeriodo: number;
  public nombreMateria: string;

  public alumnos: AlumnoCurso[];


  constructor(
    private alumnoCursoSrv: AlumnoCursoService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {

    this.cedulaDocente = this.route.snapshot.params.cedulaDocente
    this.cursoNombre = this.route.snapshot.params.cursoNombre
    this.idPeriodo = this.route.snapshot.params.idPeriodo
    this.nombreMateria = this.route.snapshot.params.nombreMateria

    this.alumnos = await this.alumnoCursoSrv.getAlumnoCurso(this.cedulaDocente, this.idPeriodo, this.cursoNombre, this.nombreMateria)
      .toPromise()
      .then(data => data.data.alumnosCurso)
    this.alumnoCursoSrv.alumnos = this.alumnos
    console.log(this.alumnos)




  }

}
