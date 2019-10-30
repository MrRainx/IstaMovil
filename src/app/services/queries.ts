import gql from 'graphql-tag';

export const buscarPeriodos = gql`
query buscarPeriodo {
  appNotas {
    periodos {
      id
      nombre
    }
  }
}
`


export const buscarCalendarioByPeriodo = gql`
query buscarCalendarioPorPeriodo($idPeriodo: Int!) {
  appCalendarioAcademico {
    calendario(idPeriodo: $idPeriodo) {
      id
      fechaInicio
      fechaFin
      activo
      detallecalendarioSet {
        id
        fechaInicio
        fechaFin
        evento {
          titulo
          descripcion
          color
        }
      }

    }
  }
}
`