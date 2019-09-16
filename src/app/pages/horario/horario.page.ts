import { Component, OnInit } from '@angular/core';
import { HorarioService } from './services/horario.service';
import { LoginService } from '../login/services/login.service';
import { User } from '../../interfaces/user';
import { PeriodoLectivo } from '../../interfaces/PeriodoLectivo';
import { SesionClaseType } from '../../interfaces/SesionClase';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  public user: User;
  public periodos: PeriodoLectivo[];
  public rol;
  public periodo: PeriodoLectivo = {
    nombre: ''
  }

  private horarios: SesionClaseType[]

  public horarioLunes: SesionClaseType[]
  public horarioMartes: SesionClaseType[]
  public horarioMiercoles: SesionClaseType[]
  public horarioJueves: SesionClaseType[]
  public horarioViernes: SesionClaseType[]



  constructor(
    private srv: HorarioService,
    private loginSrv: LoginService
  ) { }

  async ngOnInit() {
    this.user = this.loginSrv.getUserLoggedIn()
    this.rol = this.loginSrv.getRol()
    this.periodos = await this.srv.getPeriodos(this.user.persona.identificacion, this.rol);
    this.periodo = this.periodos[0]
    this.cargarHorarios()

  }

  async cargarHorarios() {
    this.horarios = await this.srv.getHorario(this.user.persona.identificacion, this.periodo.id, this.rol)

    this.horarioLunes = this.buscarHorario(1)
    this.horarioMartes = this.buscarHorario(2)
    this.horarioMiercoles = this.buscarHorario(3)
    this.horarioJueves = this.buscarHorario(4)
    this.horarioViernes = this.buscarHorario(5)



  }

  private buscarHorario(dia: number) {
    return this.horarios.filter(item => item.dia == dia)
  }

  async select() {
    await this.cargarHorarios()
  }

}
