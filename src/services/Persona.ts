import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { LugaresType } from './Lugares';

const PERSON_QUERY = gql`
query buscarPersona($cedula: String) {
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

export interface PersonaType {
  id?: number;
  idLugarNatal?: LugaresType;
  idLugarResidencia?: LugaresType;
  Foto?: string;
  identificacion?: string;
  primerApellido?: string;
  segundoApellido?: string;
  primerNombre?: string;
  segundoNombre?: string;
  genero?: string;
  sexo?: string;
  estadoCivil?: string;
  etnia?: string;
  idiomaRaiz?: string;
  tipoSangre?: string;
  telefono?: string;
  celular?: string;
  correo?: string;
  fechaRegistro?: Date;
  discapacidad?: boolean;
  tipoDiscapacidad?: string;
  porcentajeDiscapacidad?: number;
  carnetConadis?: string;
  callePrincipal?: string;
  numeroCasa?: string;
  calleSecundaria?: string;
  referencia?: string;
  sector?: string;
  idioma?: string;
  tipoResidencia?: string;
  fechaNacimiento?: Date;
  activa?: boolean;
  categoriaMigratoria?: string;
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
