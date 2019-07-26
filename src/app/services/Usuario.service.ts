import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UsuarioType } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';

const LOGIN = gql`
query login($username: String!, $password: String!) {
usuario(username: $username, password: $password) {
    username
    persona{
      id
      identificacion
    }
  }
}
`;



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


    constructor(private apollo: Apollo, public http: HttpClient) {
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

    public async saveUser(usuario: UsuarioType) {
        /*fs.writeFile('../../assets/user.json', usuario, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Usuario Guardado')
        });*/
        JSON.stringify(usuario);
    }

    public async getUserFromJSON() {
        var user: UsuarioType;
        this.http.get('../../assets/user.json')
            .subscribe((data) => {
                user = data;
            })


        return user;
    }

}
