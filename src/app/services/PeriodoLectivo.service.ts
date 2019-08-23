import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Responses } from './Responses';
import { PeriodoLectivo } from '../interfaces/PeriodoLectivo';

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


@Injectable({
  providedIn: 'root',
})

export class PeriodoLectivoService {

  constructor(private apollo: Apollo) { }

  public async getPeriodoLectivo(cedula: string): Promise<PeriodoLectivo[]> {
    const query = await this.apollo.query<Responses>({
      query: PERIODOS_DOCENTE,
      variables: {
        cedula: cedula
      }
    });

    return (await query.toPromise()).data.periodosDocente
  }
}