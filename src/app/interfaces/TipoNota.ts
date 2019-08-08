import { PeriodoLectivo } from './PeriodoLectivo';

export interface TipoNotaType {
    id?: number;
    nombre?: string;
    valorMinimo?: number;
    valorMaximo?: number;
    fechaCreacion?: Date;
    estado?: boolean;
    periodoLectivo?: PeriodoLectivo;
}