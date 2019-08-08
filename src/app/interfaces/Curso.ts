import { DocenteType } from './Docente';
import { Materia } from './Materia';
import { PeriodoLectivo } from './PeriodoLectivo';

export interface Curso {
    id?: number;
    materia?: Materia;
    prdLectivo?: PeriodoLectivo;
    docente?: DocenteType;
    nombre?: string;
    capacidad?: number;
    ciclo?: number;
    paralelo?: string;
    activo?: boolean;
}