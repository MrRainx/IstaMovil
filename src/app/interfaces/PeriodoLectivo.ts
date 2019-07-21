import { CarreraType } from './Carreras';

export interface PeriodoLectivoType {
    id?: number;
    carrera?: CarreraType;
    nombre?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    observacion?: string;
    estado?: boolean;
    activo?: boolean;
    numeroCierre?: number;
}