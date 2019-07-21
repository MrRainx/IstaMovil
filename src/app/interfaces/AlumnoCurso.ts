import { AlumnoType } from './Alumno';
import { CursosType } from './Curso';

export interface AlumnoCursoType {
    id?: number;
    alumno?: AlumnoType;
    curso?: CursosType;
    asistencia?: string;
    notaFinal?: number;
    estado?: string;
    numeroFaltas?: number;
    fechaRegistro?: Date;
    activo?: boolean;
    numeroMatricula?: number;
}