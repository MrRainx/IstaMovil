import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../horario/services/horario.service';
import { PeriodoLectivo } from '../../interfaces/PeriodoLectivo';
import { LoginService } from '../login/services/login.service';
import { User } from '../../interfaces/user';
import { NotasService } from './services/notas.service';
import { AlumnoCurso } from '../../interfaces/AlumnoCurso';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  public periodos: PeriodoLectivo[];
  public periodo: PeriodoLectivo;
  public user: User;

  public cursos: string[]
  public curso: string


  public materias: string[]
  public materia: string


  public notas: AlumnoCurso[] = []

  private cedula: string
  private rol: string

  constructor(
    private horarioSrv: HorarioService,
    private loginSrv: LoginService,
    private srv: NotasService
  ) { }

  async ngOnInit() {
    this.user = await this.loginSrv.getUserLoggedIn()

    this.cedula = await this.user.persona.identificacion;
    this.rol = await this.loginSrv.getRol()

    this.periodos = await this.horarioSrv.getPeriodos(this.cedula, this.rol);
    this.periodo = this.periodos[0];

    await this.loadCursos()
    await this.loadMaterias()

  }


  private async loadCursos() {
    this.cursos = await this.srv.getCursos(this.cedula, this.periodo.id, this.rol)
    this.curso = this.cursos[0]
  }

  private async loadMaterias() {
    this.materias = await this.srv.getMaterias(this.cedula, this.periodo.id, this.curso, this.rol)
    this.materia = this.materias[0]
  }

  async chngPeriodo() {
    await this.loadCursos()
    await this.loadMaterias()
    this.notas = []
  }

  async chgCurso() {

    await this.loadMaterias()
    this.notas = []
  }

  async chgMaterias() {
    this.notas = []
  }



  async verNotas() {
    this.notas = await this.srv.getNotasDocente(this.cedula, this.periodo.id, this.curso, this.materia, this.rol)
  }




}
