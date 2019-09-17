import { Component, OnInit } from '@angular/core';
import { PeriodoLectivo } from '../../interfaces/PeriodoLectivo';
import { User } from '../../interfaces/user';
import { NotasService } from '../notas/services/notas.service';
import { LoginService } from '../login/services/login.service';
import { HorarioService } from '../horario/services/horario.service';
import { NotificacionesService } from './services/notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {


  public periodos: PeriodoLectivo[];
  public user: User;

  public cursos: string[]

  public rol: string

  public obj = {
    titulo: '',
    mensaje: '',
    periodoCurso: null,
    cursoReceptor: '',
    cedulaDocente: ''
  }

  constructor(
    private horarioSrv: HorarioService,
    private loginSrv: LoginService,
    private notasSrv: NotasService,
    private srv: NotificacionesService

  ) { }

  async ngOnInit() {
    this.user = await this.loginSrv.getUserLoggedIn()

    this.obj.cedulaDocente = await this.user.persona.identificacion;
    this.rol = await this.loginSrv.getRol()

    this.periodos = await this.horarioSrv.getPeriodos(this.obj.cedulaDocente, this.rol);
    this.obj.periodoCurso = this.periodos[0];

    await this.loadCursos()
  }

  async chngPeriodo() {
    await this.loadCursos()
  }
  private async loadCursos() {
    this.cursos = await this.notasSrv.getCursos(this.obj.cedulaDocente, this.obj.periodoCurso.id, this.rol)
    this.obj.cursoReceptor = this.cursos[0]
  }


  async enviar() {
    await this.srv.enviarNotificacion(this.obj)
  }

}
