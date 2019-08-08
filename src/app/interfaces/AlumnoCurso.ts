import { AlumnoType } from './Alumno';
import { Curso } from './Curso';
import { NotaType } from './Nota';

export interface AlumnoCurso {
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
    notasSet?: NotaType[];
}