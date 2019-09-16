import { OnInit, Input, Component } from '@angular/core';
import { SesionClaseType } from '../../../../interfaces/SesionClase';

@Component({
  selector: 'app-card-horario',
  templateUrl: './card-horario.component.html',
  styleUrls: ['./card-horario.component.scss'],
})
export class CardHorarioComponent implements OnInit {

  @Input() public horario: SesionClaseType[]
  @Input() public title: string

  constructor() { }

  ngOnInit() { }

}
