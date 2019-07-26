import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MateriaType } from '../interfaces/Materia';

const MATERIAS_DOCENTE = gql`
query getMateriasDocente($cedula: String!, $idPeriodo: Int!, $cursoNombre: String!) {
  materiasDocente(cedula: $cedula, idPeriodo: $idPeriodo, cursoNombre: $cursoNombre) {
    id
    nombre
  }
}

`;

interface MateriaResponse {
    materias: MateriaType;
}

interface MateriasResponse {
    materiasDocente: MateriaType[];
}

@Injectable({
    providedIn: 'root',
})

export class MateriasService {
    constructor(private apollo: Apollo) {
    }

    public getMateriasDocente({ cedula, idPeriodo, cursoNombre }) {

        return this.apollo.query<MateriasResponse>({
            query: MATERIAS_DOCENTE,
            variables: {
                cedula: cedula,
                idPeriodo: idPeriodo,
                cursoNombre: cursoNombre
            }
        });

    }
}