import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Usuario } from '../../../interfaces/Usuario';
import { User } from '../../../interfaces/user';


const LOGIN = gql`
query login($username: String!, $password: String!) {

  appPersonas {
    login(username: $username, password: $password) {
      username
      roles
      persona {
        id
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        Foto
      }
    }
  }
}

`;


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: User;

  constructor(
    private apollo: Apollo
  ) { }

  public async login(usuario: String, password: String): Promise<User> {
    const query = await this.apollo.query({
      query: LOGIN,
      variables: {
        username: usuario,
        password: password
      }
    })

    const result = (await query.toPromise()).data['appPersonas']['login']

    this.LOGIN(result)

    return result

  }

  private LOGIN(user: User): void {
    if (user != null) {
      user.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  public LOGOUT() {
    localStorage.setItem('currentUser', null);
    this.currentUser = null;
  }

  public getUserLoggedIn() {
    if (this.currentUser == null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return this.currentUser;
  }

  public getRol() {
    this.currentUser = this.getUserLoggedIn();
    return this.currentUser.roles
      .filter(
        (item: string) =>
          item.includes('ALUMNO') || item.includes("DOCENTE") || item.includes("COORDINADOR")
      ).map(c => c)[0]
  }


}
