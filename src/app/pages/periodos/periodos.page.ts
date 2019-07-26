import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeriodoLectivoService } from 'src/app/services/PeriodoLectivo.service';
import { PeriodoLectivoType } from 'src/app/interfaces/PeriodoLectivo';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.page.html',
  styleUrls: ['./periodos.page.scss'],
})
export class PeriodosPage implements OnInit {

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

    await this.cargarPeriodos();
  }

  private async cargarPeriodos() {
    this.periodos = await this.periodoSrv.getPeriodoLectivo(this.cedula)
      .toPromise()
      .then(data => data.data.periodosDocente);
  }
  /*
  
    private async cargarCursos() {
      console.log("CARGANDO CURSOS")
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
  
  
  
  
  */


}
