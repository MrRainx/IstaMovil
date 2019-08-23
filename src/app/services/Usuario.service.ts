import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { Responses } from './Responses';

const LOGIN = gql`
query login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    username
    persona {
      id
      identificacion
    }
  }
}

`;

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {


    constructor(private apollo: Apollo, public http: HttpClient) {
    }

    public async login(usuario: String, password: String): Promise<Usuario> {
        const query = await this.apollo.query<Responses>({
            query: LOGIN,
            variables: {
                username: usuario,
                password: password
            }
        })

        query.toPromise().then(data => console.log(data))

        return (await query.toPromise()).data.login

    }

}
