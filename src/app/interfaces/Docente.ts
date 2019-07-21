import { PersonaType } from './Persona';

export interface DocenteType {
    id?: number;
    persona?: PersonaType;
    codigo?: string;
    otroTrabajo?: boolean;
    categoria?: number;
    fechaContrato?: Date;
    fechaFin?: Date;
    tipoTiempo?: string;
    activo?: boolean;
    observacion?: string;
    capacitador?: boolean;
    titulo?: string;
    abreviatura?: string;
    enFuncion?: boolean;
}