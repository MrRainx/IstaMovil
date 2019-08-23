import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Curso } from '../interfaces/Curso';

const CURSOS_DOCENTE = gql`
query getCursosDocentes($cedula: string!) {
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



interface CursoResponse {
    cursos: Curso;
}

interface CursosResponse {
    cursos: Curso[];
}

@Injectable({
    providedIn: 'root',
})

export class CursosService {

    private cursos: Curso[];

    constructor(private apollo: Apollo) {
    }

    public async setCursosDocente(cedula: string) {
        const query = await this.apollo.query<CursosResponse>({
            query: CURSOS_DOCENTE,
            variables: {
                cedula: cedula
            }
        })

        const result = await query.toPromise().then(data => data.data.cursos);
        this.cursos = result;
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