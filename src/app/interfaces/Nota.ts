import { AlumnoCursoType } from './AlumnoCurso';
import { TipoNotaType } from './TipoNota';

export interface NotaType {
    id?: number;
    valor?: number;
    alumnoCurso?: AlumnoCursoType;
    tipoNota?: TipoNotaType;
}