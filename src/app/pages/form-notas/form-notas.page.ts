import { Component, OnInit } from '@angular/core';
import { PeriodoLectivoService } from '../../services/PeriodoLectivo.service';
import { PeriodoLectivo } from '../../interfaces/PeriodoLectivo';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../interfaces/Curso';
import { CursosService } from '../../services/Curso.service';
import { MateriasService } from '../../services/Materia.service';
import { Materia } from '../../interfaces/Materia';

@Component({
  selector: 'app-form-notas',
  templateUrl: './form-notas.page.html',
  styleUrls: ['./form-notas.page.scss'],
})
export class FormNotasPage implements OnInit {


  public periodos: PeriodoLectivo[];
  public periodoPk: number;

  public cursos: Set<string>;
  public cursoNombre: string;

  public materias: Set<string>;
  public materia: number;

  public cedula: string;

  constructor(
    private periodoSrv: PeriodoLectivoService,
    private cursoSrv: CursosService,
    private materiaSrv: MateriasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.cedula = this.route.snapshot.params.cedula;
    this.periodos = await this.periodoSrv.getPeriodoLectivo(this.cedula);


    await this.cursoSrv.setCursosDocente(this.cedula)
    await this.materiaSrv.setMateriasDocente(this.cedula)

    this.cursos = this.cursoSrv.getAllCursos(this.periodoPk)
    this.materias = this.materiaSrv.getAllMaterias(this.cursoNombre, this.periodoPk);
    this.periodoPk = this.periodos[0].id
  }



  async changePeriodos() {
    this.cursos = await this.cursoSrv.getAllCursos(this.periodoPk)
    this.materias = await this.materiaSrv.getAllMaterias(this.cursoNombre, this.periodoPk);
    this.cursoNombre = this.cursos[0]
    this.materia = this.materias[0]
  }

  async changeCursos() {
    this.materias = await this.materiaSrv.getAllMaterias(this.cursoNombre, this.periodoPk);
  }




  verRegistro() {
    this.router.navigate(['alumnos-curso', this.cedula, this.periodoPk, this.cursoNombre, this.materia]);
  }


}
