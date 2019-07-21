import { CarreraType } from './Carreras';

export interface MateriaType {
    id?: number;
    carrera?: CarreraType;
    codigo?: string;
    nombre?: string;
    ciclo?: number;
    creditos?: number;
    tipo?: string;
    categoria?: string;
    tipoAcreditacion?: string;
    horasDocencia?: number;
    horasPracticas?: number;
    horasAutoEstudio?: number;
    horasPresencial?: number;
    totalHoras?: number;
    activa?: boolean;
    objetivo?: string;
    descripcion?: string;
    objetivoEspecifico?: string;
    organizacionCurricular?: string;
    campoFormacion?: string;
    nucleo?: boolean;
}