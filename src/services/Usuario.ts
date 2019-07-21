import { PersonaType } from './Persona';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

const LOGIN = gql`
query login($username: String!, $password: String!) {
usuario(username: $username, password: $password) {
    username
    Password
    persona{
      id
      primerNombre
      primerApellido
      Foto
    }
  }
}
`;


export interface UsuarioType {
    username?: string;
    password?: string;
    estado?: boolean;
    persona?: PersonaType;
}

interface UsuarioResponse {
    usuario: UsuarioType;
}
interface UsuariosResponse {
    usuarios: UsuarioType[];
}

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {


    constructor(private apollo: Apollo) {
    }

    public async login(username: String, password: String) {

        const query = await this.apollo.query<UsuarioResponse>({
            query: LOGIN,
            variables: {
                username: username,
                password: password
            }
        });
        try {
            return await query.toPromise().then(res => res.data.usuario);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}
