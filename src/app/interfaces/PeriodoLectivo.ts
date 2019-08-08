import { Carrera } from './Carreras';

export interface PeriodoLectivo {
    id?: number;
    carrera?: Carrera;
    nombre?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    observacion?: string;
    estado?: boolean;
    activo?: boolean;
    numeroCierre?: number;
}