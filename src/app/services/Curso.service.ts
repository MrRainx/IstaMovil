import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Curso } from '../interfaces/Curso';
import { Responses } from './Responses';

const CURSOS_DOCENTE = gql`
query getCursosDocentes($cedula: String!) {
  cursos(cedulaDocente: $cedula) {
    id
    nombre
    prdLectivo {
      id
      nombre
    }
    docente {
      id
    }
  }
}
`;


@Injectable({
    providedIn: 'root',
})

export class CursosService {

    private cursos: Curso[];

    constructor(private apollo: Apollo) {
    }

    public async setCursosDocente(cedula: string) {
        const query = await this.apollo.query<Responses>({
            query: CURSOS_DOCENTE,
            variables: {
                cedula: cedula
            }
        })

        this.cursos = (await query.toPromise()).data.cursos;

    }

    public getAllCursos(idPeriodo: number) {
        try {
            const nombres = new Set(this.cursos.filter(item => item.prdLectivo.id == idPeriodo)
                .map(c => c.nombre))
            return nombres;

        } catch (error) {
            return null;
        }
    }
}