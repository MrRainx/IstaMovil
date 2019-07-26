import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from '../../services/Materia.service';
import { MateriaType } from '../../interfaces/Materia';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  public params = {
    cedula: '',
    idPeriodo: 0,
    cursoNombre: ''
  }

  public materias: MateriaType[];


  constructor(
    private route: ActivatedRoute,
    private materiaSrv: MateriasService
  ) { }

  async ngOnInit() {

    this.params.cedula = this.route.snapshot.params.cedula
    this.params.idPeriodo = this.route.snapshot.params.idPeriodo
    this.params.cursoNombre = this.route.snapshot.params.cursoNombre

    this.materias = await this.materiaSrv.getMateriasDocente(this.params)
      .toPromise()
      .then(data => data.data.materiasDocente);


  }

}
