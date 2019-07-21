import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PeriodoLectivoType } from './PeriodoLectivo';
import { DocenteType } from './Docente';
import { MateriasType } from './Materias';

const CURSOS_QUERY = gql`
query buscarCursos(){
    cursos() {
    }
}`;

export interface CursosType {
    id?: number;
    materia?: MateriasType;
    periodoLectivo?: PeriodoLectivoType;
    docente?: DocenteType;
    nombre?: string;
    capacidad?: number;
    ciclo?: number;
    paralelo?: string;
    activo?: boolean;
}

interface CursoResponse {
    cursos: CursosType;
}

interface CursosResponse {
    cursos: CursosType[];
}

@Injectable({
    providedIn: 'root',
})

export class CursosService {
    constructor(private apollo: Apollo) {
    }

    public async getCursos() {
        const query = await this.apollo.query<CursosResponse>({
            query: CURSOS_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.cursos);
    }
}