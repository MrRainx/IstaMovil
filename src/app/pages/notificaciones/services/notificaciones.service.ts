import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


const ENVIAR_NOTIFICACION = gql`
mutation enviarNotificacion($notificacion: NotificacionInput!) {
  appNotificaciones {
    enviarNotificacion(notificacion: $notificacion) {
      state
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
    console.log(notificacion);
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

}
