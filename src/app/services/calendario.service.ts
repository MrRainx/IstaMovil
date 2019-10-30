import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { buscarPeriodos, buscarCalendarioByPeriodo } from './queries';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(
    private apollo: Apollo
  ) { }


  public async getPeriodos() {
    const query = await this.apollo.query({
      query: buscarPeriodos,
      fetchPolicy: 'no-cache'
    });
    const promise = await query.toPromise()
    return promise.data['appNotas']['periodos']
  }

  public async getCalendarioBy(idPeriodo: number) {
    const query = this.apollo.query({
      query: buscarCalendarioByPeriodo,
      variables: {
        idPeriodo: idPeriodo
      }
    });

    const promise = await query.toPromise()

    return promise.data['appCalendarioAcademico']['calendario']

  }



}
