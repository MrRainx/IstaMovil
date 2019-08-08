import { Curso } from './Curso';
import { Time } from '@angular/common';

export interface SesionClaseType {
    id?: number;
    curso?: Curso;
    dia?: number;
    horaInicio?: Time;
    horaFin?: Time;
}
