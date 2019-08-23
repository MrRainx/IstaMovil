import { Usuario } from '../interfaces/Usuario';
import { PeriodoLectivo } from '../interfaces/PeriodoLectivo';
import { Curso } from '../interfaces/Curso';
import { Materia } from '../interfaces/Materia';
import { AlumnoCurso } from '../interfaces/AlumnoCurso';
import { PersonaType } from '../interfaces/Persona';
export interface Responses {
    login?: Usuario
    periodosDocente?: PeriodoLectivo[]
    cursos?: Curso[];
    materias?: Materia[];
    alumnosCurso?: AlumnoCurso[];
    persona?: PersonaType[];
}