import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CursosType } from '../interfaces/Curso';

const CURSOS_DOCENTE = gql`
query getCursosDocentes($cedula: String!, $idPeriodo: Int!) {
  cursosDocente(cedula: $cedula, idPeriodo: $idPeriodo) {
    id
    nombre
  }
}
`;



interface CursoResponse {
    cursos: CursosType;
}

interface CursosResponse {
    cursosDocente: CursosType[];
}

@Injectable({
    providedIn: 'root',
})

export class CursosService {

    constructor(private apollo: Apollo) {
    }

    public getCursosDocente({ cedula, idPeriodo }) {
        return this.apollo.query<CursosResponse>({
            query: CURSOS_DOCENTE,
            variables: {
                cedula: cedula,
                idPeriodo: idPeriodo
            }
        });
    }
}