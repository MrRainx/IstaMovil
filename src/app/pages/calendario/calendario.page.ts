import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../../services/calendario.service';
import { CalendarioAcad, PeriodoLectivo } from '../../interfaces/models';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {


  public periodos: PeriodoLectivo[]
  public periodo: PeriodoLectivo = {}

  public calendario: CalendarioAcad

  constructor(
    private srv: CalendarioService
  ) { }


  async ngOnInit() {

    this.periodos = await this.srv.getPeriodos()

  }


  async verCalendario() {
    this.calendario = await this.srv.getCalendarioBy(this.periodo.id)

  }

}
