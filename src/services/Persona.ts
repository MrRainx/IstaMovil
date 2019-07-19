import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const PERSON_QUERY = gql`
query buscarPersona($cedula: String) {
  persona(cedula: $cedula) {
    id
    primerNombre
    primerApellido
    Foto
  }
}
`;

export interface PersonaType {
  id?: number;
  primerNombre?: string;
  primerApellido?: string;
  Foto?: string;
}

interface PersonaResponse {
  persona: PersonaType;
}

interface PersonasResponse {
  persona: PersonaType[];
}


@Injectable({
  providedIn: 'root',
})
export class PersonaService {


  constructor(private apollo: Apollo) {
  }

  public async getPersona(cedula: string) {
    const query = await this.apollo.query<PersonaResponse>({
      query: PERSON_QUERY,
      variables: { cedula: cedula }
    });
    return await query.toPromise().then(res => res.data.persona);
  }

}
