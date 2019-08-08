import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Materia } from '../interfaces/Materia';

const MATERIAS_DOCENTE = gql`
query getMateriasDocente($cedula: String!) {
    materias(cedulaDocente: $cedula) {
    id
    nombre
    cursosSet {
      id
      nombre
      prdLectivo {
        id
        nombre
      }
      docente {
        id
        codigo
      }
    }
  }
}

`;

interface MateriaResponse {
    materias: Materia;
}

interface MateriasResponse {
    materias: Materia[];
}

@Injectable({
    providedIn: 'root',
})

export class MateriasService {

    private materias: Materia[];

    constructor(private apollo: Apollo) {
    }

    public async setMateriasDocente(cedula: string) {

        const query = await this.apollo.query<MateriasResponse>({
            query: MATERIAS_DOCENTE,
            variables: {
                cedula: cedula
            }
        });
        const result = await query.toPromise().then(data => data.data.materias)
        this.materias = result

    }

    public getAllMaterias(cursoNombre: string, idPeriodo: number) {
        const result: Set<string> = new Set<string>();
        try {
            this.materias.forEach(obj => {

                obj.cursosSet.forEach(curso => {
                    if (curso.nombre == cursoNombre && curso.prdLectivo.id == idPeriodo) {
                        result.add(obj.nombre)
                    }
                });

            });


            console.log(result)
            return result;
        } catch (error) {
            return null;
        }


    }
}