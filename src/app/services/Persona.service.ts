import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PersonaType } from '../interfaces/Persona';

const PERSON_QUERY = gql`
query buscarPersona($cedula: string) {
  persona(cedula: $cedula) {
    id
    idLugarNatal
    idLugarResidencia
    Foto
    identificacion
    primerApellido
    segundoApellido
    primerNombre
    segundoNombre
    genero
    sexo
    estadoCivil
    etnia
    idiomaRaiz
    tipoSangre
    telefono
    celular
    correo
    fechaRegistro
    discapacidad
    tipoDiscapacidad
    porcentajeDiscapacidad
    carnetConadis
    callePrincipal
    numeroCasa
    calleSecundaria
    referencia
    sector
    idioma
    tipoResidencia
    fechaNacimiento
    activa
    categoriaMigratoria
  }
}
`;


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
