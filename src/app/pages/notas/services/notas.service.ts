import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const CURSOS = gql`
query buscarCursos($cedula: String!, $idPeriodo: Int!, $rol: String!) {
  appNotas {
    cursos(cedula: $cedula, idPeriodo: $idPeriodo, rol: $rol)
  }
}
`

const MATERIAS = gql`
query buscarMaterias($cedula: String!, $idPeriodo: Int!, $curso: String!, $rol: String!) {
  appNotas {
    materias(cedula: $cedula, idPeriodo: $idPeriodo, curso: $curso, rol: $rol)
  }
}
`

const NOTAS_DOCENTE = gql`
query buscarNotasDocente($cedula: String!, $idPeriodo: Int!, $curso: String!, $materia: String!, $rol: String!) {
  appNotas {
    notas(cedula: $cedula, idPeriodo: $idPeriodo, curso: $curso, materia: $materia, rol: $rol) {
      id
      notaFinal
      alumno {
        id
        persona {
          Foto
          identificacion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
        }
      }
      notasSet {
        id
        valor
        tipoNota {
          nombre
        }
      }
    }
  }
}

`

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(
    private apollo: Apollo
  ) { }


  public async getCursos(cedula, idPeriodo, rol): Promise<string[]> {
    const query = await this.apollo.query({
      query: CURSOS,
      variables: {
        cedula: cedula,
        idPeriodo: idPeriodo,
        rol: rol
      },
      fetchPolicy: 'network-only'
    })

    return (await query.toPromise()).data['appNotas']['cursos']

  }

  public async getMaterias(cedula, idPeriodo, curso, rol): Promise<string[]> {
    const query = await this.apollo.query({
      query: MATERIAS,
      variables: {
        cedula: cedula,
        idPeriodo: idPeriodo,
        curso: curso,
        rol: rol
      },
      fetchPolicy: 'network-only'
    })

    return (await query.toPromise()).data['appNotas']['materias']

  }

  public async getNotasDocente(cedula, idPeriodo, curso, materia, rol) {
    const query = await this.apollo.query({
      query: NOTAS_DOCENTE,
      variables: {
        cedula: cedula,
        idPeriodo: idPeriodo,
        curso: curso,
        materia: materia,
        rol: rol
      }
    })

    return (await query.toPromise()).data['appNotas']['notas']
  }

}
