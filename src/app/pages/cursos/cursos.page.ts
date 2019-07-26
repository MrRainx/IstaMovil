import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosType } from '../../interfaces/Curso';
import { CursosService } from '../../services/Curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  public params = {
    cedula: '',
    idPeriodo: 0
  }

  public cursos: CursosType[];


  constructor(
    private route: ActivatedRoute,
    private cursosSrv: CursosService
  ) { }

  async ngOnInit() {
    this.params.cedula = this.route.snapshot.params.cedula
    this.params.idPeriodo = this.route.snapshot.params.idPeriodo


    this.cursos = await this.cursosSrv.getCursosDocente(this.params)
      .toPromise()
      .then(data => data.data.cursosDocente)
  }

}
