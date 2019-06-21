import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import gql from 'graphql-tag';
import { PeopleType } from './PeopleType';


@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  public personas: PeopleType[];
  public persona: PeopleType;


  constructor(private apollo: Apollo) {
  }

  public getPersona = () => {
    return this.apollo.watchQuery<PeopleType>({
      query: gql`{
            person(cedula: "0104925789") {
              idPersona
              personaPrimerNombre
              personaPrimerApellido
            }
          }`
    });
  }
}
