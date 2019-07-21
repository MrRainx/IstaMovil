import { CursosType } from './Curso';
import { Time } from '@angular/common';

export interface SesionClaseType {
    id?: number;
    curso?: CursosType;
    dia?: number;
    horaInicio?: Time;
    horaFin?: Time;
}
