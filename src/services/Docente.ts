import { PersonaType } from './Persona';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const DOCENTE_QUERY = gql`
query buscarDocente($cedula: String){
    docente(cedula: $cedula) {
        id
        codigo
        otroTrabajo
        categoria
        fechaContrato
        fechaFin
        tipoTiempo
        activo
        observacion
        capacitador
        titulo
        abreviatura
        enFuncion
    }
}`

export interface DocenteType {
    id?: number,
    persona?: PersonaType,
    codigo?: String,
    otroTrabajo?: boolean;
    categoria?: number,
    fechaContrato?: Date,
    fechaFin?: Date,
    tipoTiempo?: String,
    activo?: boolean,
    observacion?: String,
    capacitador?: boolean,
    titulo?: String,
    abreviatura?: String,
    enFuncion?: boolean
}

interface DocenteResponse {
    docente: DocenteType;
}

interface DocentesResponse {
    docente: DocenteType[];
}

@Injectable({
    providedIn: 'root',
})

export class DocenteService {
    constructor(private apollo: Apollo) {
    }

    public async getDocente(cedula: string) {
        const query = await this.apollo.query<DocenteResponse>({
            query: DOCENTE_QUERY,
            variables: { cedula: cedula }
        });
        return await query.toPromise().then(res => res.data.docente);
    }
}