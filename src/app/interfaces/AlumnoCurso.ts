import { AlumnoType } from './Alumno';
import { Curso } from './Curso';

export interface AlumnoCursoType {
    id?: number;
    alumno?: AlumnoType;
    curso?: Curso;
    asistencia?: string;
    notaFinal?: number;
    estado?: string;
    numeroFaltas?: number;
    fechaRegistro?: Date;
    activo?: boolean;
    numeroMatricula?: number;
}