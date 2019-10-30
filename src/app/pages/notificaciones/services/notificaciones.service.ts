import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';


const ENVIAR_NOTIFICACION = gql`
mutation enviarNotificacion($notificacion: NotificacionInput!) {
  appNotificaciones {
    enviarNotificacion(notificacion: $notificacion) {
      state
    }
  }
}
`
const MIS_NOTIFICACIONES = gql`
query buscarMisNotificaciones($cedula: String!, $modo: String!) {
  appNotificaciones {
    misNotificaciones(cedula: $cedula, modo: $modo) {
      id
      notificacion {
        id
        titulo
        mensaje
      }
      emisor {
        id
        primerNombre
        primerApellido
        segundoNombre
        segundoApellido
      }
    }
  }
}

`


const ELIMINAR_NOTIFICACION = gql`

mutation eliminarNotificacion($idNotificacion: Int!) {
  appNotificaciones {
    eliminarNotificacion(idNotificacion: $idNotificacion) {
      state
    }
  }
}

`;


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(
    private apollo: Apollo
  ) { }


  public async enviarNotificacion(notificacion) {

    const mutations = this.apollo.mutate({
      mutation: ENVIAR_NOTIFICACION,
      variables: {
        notificacion: {
          cedulaDocente: notificacion.cedulaDocente,
          cursoReceptor: notificacion.cursoReceptor,
          mensaje: notificacion.mensaje,
          periodoCurso: notificacion.periodoCurso.id,
          titulo: notificacion.titulo
        }
      }
    })

    const result = (await mutations.toPromise()).data
    console.log(result);
  }


  public async getMisNotificaciones({ cedula, rol }) {

    if (rol == 'ALUMNO') {
      rol = 'RECEPTOR'
    }
    const query = this.apollo.query({
      query: MIS_NOTIFICACIONES,
      variables: {
        cedula: cedula,
        modo: rol
      },
      fetchPolicy: 'network-only'
    })
    return (await query.toPromise()).data['appNotificaciones']['misNotificaciones']
  }

  async eliminarNotificacion(id: number) {
    const mutate = this.apollo.mutate({
      mutation: ELIMINAR_NOTIFICACION,
      variables: {
        idNotificacion: id
      }
    })

    await mutate.toPromise();

  }

}
