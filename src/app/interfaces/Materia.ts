import { Carrera } from './Carreras';
import { Curso } from './Curso';

export interface Materia {
    id?: number;
    carrera?: Carrera;
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
    cursosSet?: Curso[]
}