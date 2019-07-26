import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioType } from 'src/app/interfaces/Usuario';
import { PeriodoLectivoService } from 'src/app/services/PeriodoLectivo.service';
import { PeriodoLectivoType } from 'src/app/interfaces/PeriodoLectivo';
import { CursosType } from '../../interfaces/Curso';
import { CursosService } from '../../services/Curso.service';
import { MateriaType } from '../../interfaces/Materia';
import { MateriasService } from '../../services/Materia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public cedula: String;

  public periodos: PeriodoLectivoType[];
  public periodoNombre: String;
  private idPeriodo: Number;

  public cursos: CursosType[];
  public cursoNombre: String;

  public materias: MateriaType[];
  public materiaNombre: String;


  constructor(
    private route: ActivatedRoute,
    private periodoSrv: PeriodoLectivoService,
    private cursosSrv: CursosService,
    private materiasSrv: MateriasService
  ) {

  }

  async ngOnInit() {
    this.cedula = this.route.snapshot.params.cedula

    await this.cargarPeriodos();
    await this.cargarCursos();
    await this.cargarMaterias();
  }

  private async cargarPeriodos() {
    this.periodos = await this.periodoSrv.getPeriodoLectivo(this.cedula)
      .toPromise()
      .then(data => data.data.periodosDocente);

    this.periodoNombre = this.periodos[0].nombre
    this.idPeriodo = this.periodos[0].id
  }


  private async cargarCursos() {
    this.cursos = await this.cursosSrv.getCursosDocente(this.cedula, this.idPeriodo)
      .toPromise()
      .then(data => data.data.cursosDocente)

    this.cursoNombre = this.cursos[0].nombre
  }

  private async cargarMaterias() {
    this.materias = await this.materiasSrv.getMateriasDocente(this.cedula, this.idPeriodo, this.cursoNombre)
      .toPromise()
      .then(data => data.data.materiasDocente);

    this.materiaNombre = this.materias[0].nombre
  }


  onSubmitTemplate() {

  }

  cmbPeriodo() {
    console.log(this.periodoNombre)
  }

  cmbCursos() {
    console.log(this.cursoNombre)

  }


  cmbMaterias() {

  }


}
