import { DocenteType } from './Docente';

export interface Carrera {
    id?: number;
    docenteCoordinador?: DocenteType;
    nombre?: string;
    codigo?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    modalidad?: string;
    activo?: boolean;
    semanas?: number;
}