import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PeriodoLectivo } from '../interfaces/PeriodoLectivo';

const PERIODOS_DOCENTE = gql`
query periodosDocente($cedula: string!) {
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
    periodolectivo: PeriodoLectivo;
}

interface PeriodosLectivosResponse {
    periodosDocente: PeriodoLectivo[];
}

@Injectable({
    providedIn: 'root',
})

export class PeriodoLectivoService {

    constructor(private apollo: Apollo) { }

    public getPeriodoLectivo(cedula: string) {
        return this.apollo.query<PeriodosLectivosResponse>({
            query: PERIODOS_DOCENTE,
            variables: {
                cedula: cedula
            }
        });
    }
}