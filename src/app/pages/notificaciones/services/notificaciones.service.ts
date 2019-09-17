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
    const mutations = await this.apollo.mutate({
      mutation: ENVIAR_NOTIFICACION,
      variables: {
        notificacion: notificacion
      }
    })

    const result = await mutations.toPromise()
    console.log(result);
  }

}
