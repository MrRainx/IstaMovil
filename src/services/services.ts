import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Personas } from 'src/services/models';


@Injectable({
    providedIn: 'root',
})
export class GraphqlService {
    public personas: Personas[];
    public persona: Personas;

    constructor(private apollo: Apollo, httpLink: HttpLink) {

        apollo.create({
            link: httpLink.create({ 
                uri: 'http://127.0.0.1:8000/graphql',
                method:'GET'
            }),
            cache: new InMemoryCache()
          })
    }

    public getPersonas = () => {
        this.apollo.query({
          query: gql`{
            person(cedula: "0104925789") {
              idPersona
              personaPrimerNombre
              personaPrimerApellido
            }
          }`
        }).subscribe(result => {
            this.persona = result.data as Personas
            console.log(this.persona)
        })
      }
}
