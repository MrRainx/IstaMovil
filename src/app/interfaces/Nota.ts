import { AlumnoCurso } from './AlumnoCurso';
import { TipoNotaType } from './TipoNota';

export interface NotaType {
    id?: number;
    valor?: number;
    alumnoCurso?: AlumnoCurso;
    tipoNota?: TipoNotaType;
}