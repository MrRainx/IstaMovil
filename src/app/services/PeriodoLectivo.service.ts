import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PeriodoLectivoType } from '../interfaces/PeriodoLectivo';

const PERIODOS_DOCENTE = gql`
query periodosDocente($cedula: String!) {
  periodosDocente(cedula: $cedula) {
    id
    nombre
    carrera {
      id
      nombre
    }
  }
}

`;



interface PeriodoLectivoResponse {
    periodolectivo: PeriodoLectivoType;
}

interface PeriodosLectivosResponse {
    periodosDocente: PeriodoLectivoType[];
}

@Injectable({
    providedIn: 'root',
})

export class PeriodoLectivoService {

    constructor(private apollo: Apollo) { }

    public getPeriodoLectivo(cedula: String) {
        return this.apollo.query<PeriodosLectivosResponse>({
            query: PERIODOS_DOCENTE,
            variables: {
                cedula: cedula
            }
        });
    }
}