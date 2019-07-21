import { DocenteType } from './Docente';
import { MateriaType } from './Materia';
import { PeriodoLectivoType } from './PeriodoLectivo';

export interface CursosType {
    id?: number;
    materia?: MateriaType;
    periodoLectivo?: PeriodoLectivoType;
    docente?: DocenteType;
    nombre?: string;
    capacidad?: number;
    ciclo?: number;
    paralelo?: string;
    activo?: boolean;
}