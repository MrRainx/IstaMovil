import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { SesionClaseType } from '../../../interfaces/SesionClase';


const PERIODOS = gql`
query buscarPeriodos($cedula: String!, $rol: String!) {
  appNotas {
    periodos(cedula: $cedula, rol: $rol) {
      id
      nombre
    }
  }
}

`;

const HORARIO = gql`
query buscarHorario($cedula: String!, $idPrdLectivo: Int!, $rol: String!) {
  appNotas {
    horario(cedula: $cedula, idPrdLectivo: $idPrdLectivo, rol: $rol) {
      id
      dia
      horaInicio
      horaFin
      curso {
        id
        nombre
        materia {
          nombre
        }
      }
    }
  }
}

`;

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(
    private apollo: Apollo
  ) { }

  public async getPeriodos(cedula, rol) {
    const query = await this.apollo.query({
      query: PERIODOS,
      variables: {
        cedula: cedula,
        rol: rol
      }
    });

    return (await query.toPromise()).data['appNotas']['periodos']


  }

  public async getHorario(cedula, idPrdLectivo, rol): Promise<SesionClaseType[]> {
    const query = await this.apollo.query({
      query: HORARIO,
      variables: {
        cedula: cedula,
        idPrdLectivo: idPrdLectivo,
        rol: rol
      },
      fetchPolicy: 'network-only'
    })

    return (await query.toPromise()).data['appNotas']['horario']

  }

}
