import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Responses } from './Responses';

const PERSON_QUERY = gql`
query buscarPersona($cedula: String!) {
  persona(cedula: $cedula) {
    id
  }
}
`;


@Injectable({
  providedIn: 'root',
})
export class PersonaService {


  constructor(private apollo: Apollo) {
  }

  public async getPersona(cedula: string) {
    const query = await this.apollo.query<Responses>({
      query: PERSON_QUERY,
      variables: { cedula: cedula }
    });
    return await query.toPromise().then(res => res.data.persona);
  }

}
