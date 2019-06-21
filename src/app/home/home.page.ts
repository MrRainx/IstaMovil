import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const PERSON_QUERY = gql`
query buscarPersona($cedula: String) {
  person(cedula: $cedula) {
    idPersona
    personaPrimerNombre
    personaPrimerApellido
  }
}
`;

type Persona = {
  idPersona: number;
  personaPrimerNombre: string;
  personaPrimerApellido: string;
}

type PersonaResponse = {
  person: Persona;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage implements OnInit {

  public persona: Persona;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    /*
    this.apollo
      .query<PersonaResponse>({
        query: PERSON_QUERY,
        variables: { cedula: "0104925789" }
      }).subscribe(res => {
        this.persona = res.data.person as Persona;
      });
      */
  }

  public ingresar() {
    
  }


}
