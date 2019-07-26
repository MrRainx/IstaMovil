import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioType } from 'src/app/interfaces/Usuario';
import { PeriodoLectivoService } from 'src/app/services/PeriodoLectivo.service';
import { PeriodoLectivoType } from 'src/app/interfaces/PeriodoLectivo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public cedula: String;
  public periodos: PeriodoLectivoType[];
  public periodoNombre: String;

  constructor(
    private route: ActivatedRoute,
    private periodoSrv: PeriodoLectivoService
  ) {

  }

  async ngOnInit() {
    this.cedula = this.route.snapshot.params.cedula

    this.periodos = await this.periodoSrv.getPeriodoLectivo(this.cedula)
      .toPromise()
      .then(data => data.data.periodosDocente);
    this.periodoNombre = this.periodos[0].nombre

  }

  onSubmitTemplate() {

  }

  cmbPeriodo() {
    console.log(this.periodoNombre)
  }


}
