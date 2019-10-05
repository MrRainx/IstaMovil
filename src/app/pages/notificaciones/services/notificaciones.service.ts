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
      titulo
      mensaje
      fechaEnvio
      emisor {
        primerNombre
        primerApellido
      }
    }
  }
}

`



@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(
    private apollo: Apollo
  ) { }


  public async enviarNotificacion(notificacion) {

    const mutations = await this.apollo.mutate({
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

    console.log(cedula);
    console.log(rol);

    const query = await this.apollo.query({
      query: MIS_NOTIFICACIONES,
      variables: {
        cedula: cedula,
        modo: rol
      },
      fetchPolicy: 'network-only'
    })

    return (await query.toPromise()).data['appNotificaciones']['misNotificaciones']

  }

}
