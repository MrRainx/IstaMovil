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


  public comb1: String[] = [
    "sel1",
    "sel2"
  ]
  public selected: String = this.comb1[0];

  private comb2: String[] = [
    "subSel1",
    "subSel2",
    "subSel3",
    "subSel4",
  ]
  private comb3: String[] = [
    "sub---Sel1",
    "sub---Sel2",
    "sub---Sel3",
    "sub---Sel4",
  ]

  public second: String[] = this.comb2;


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

  doRefresh() {

    console.log(`----------->${this.selected}`)
    if (this.selected.includes("sel1")) {
      this.second = this.comb2
      console.log("1")
    } else if (this.selected.includes("sel2")) {
      this.second = this.comb3
      console.log("2")
    }

    console.log(this.second)
  }

}
