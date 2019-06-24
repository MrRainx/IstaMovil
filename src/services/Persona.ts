import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const PERSON_QUERY = gql`
query buscarPersona($cedula: String) {
  person(cedula: $cedula) {
    idPersona
    personaPrimerNombre
    personaPrimerApellido
    personaFoto
  }
}
`;

export interface PersonaType {
  idPersona?: number;
  personaPrimerNombre?: string;
  personaPrimerApellido?: string;
  personaFoto?: string;
}

interface PersonaResponse {
  person: PersonaType;
}

interface PersonasResponse {
  person: PersonaType[];
}


@Injectable({
  providedIn: 'root',
})
export class GraphqlService {


  constructor(private apollo: Apollo) {
  }

  public async getPersona(cedula: string) {
    const query = await this.apollo.query<PersonaResponse>({
      query: PERSON_QUERY,
      variables: { cedula: cedula }
    });
    return await query.toPromise().then(res => res.data.person);
  }

}
