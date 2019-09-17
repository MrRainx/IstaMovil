import { Component, OnInit } from '@angular/core';
import { PeriodoLectivo } from '../../interfaces/PeriodoLectivo';
import { User } from '../../interfaces/user';
import { NotasService } from '../notas/services/notas.service';
import { LoginService } from '../login/services/login.service';
import { HorarioService } from '../horario/services/horario.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {


  public periodos: PeriodoLectivo[];
  public user: User;

  public cursos: string[]



  public titulo: string
  public mensaje: string

  public obj = {
    titulo: '',
    mensaje: '',
    periodo: null,
    curso: '',
    cedula: '',
    rol: ''
  }

  constructor(
    private horarioSrv: HorarioService,
    private loginSrv: LoginService,
    private notasSrv: NotasService

  ) { }

  async ngOnInit() {
    this.user = await this.loginSrv.getUserLoggedIn()

    this.obj.cedula = await this.user.persona.identificacion;
    this.obj.rol = await this.loginSrv.getRol()

    this.periodos = await this.horarioSrv.getPeriodos(this.obj.cedula, this.obj.rol);
    this.obj.periodo = this.periodos[0];

    await this.loadCursos()
  }

  async chngPeriodo() {
    await this.loadCursos()
  }
  private async loadCursos() {
    this.cursos = await this.notasSrv.getCursos(this.obj.cedula, this.obj.periodo.id, this.obj.rol)
    this.obj.curso = this.cursos[0]
  }


  async enviar() {

  }

}
