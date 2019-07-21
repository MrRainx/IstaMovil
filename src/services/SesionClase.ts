import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CursosType } from './Cursos';
import { Time } from '@angular/common';

const SESION_CLASE_QUERY = gql`
query buscarSesionClase(){
    sesionclase() {
    }
}`;

export interface SesionClaseType {
    id?: number;
    curso?: CursosType;
    dia?: number;
    horaInicio?: Time;
    horaFin?: Time;
}

interface SesionClaseResponse {
    sesionclase: SesionClaseType;
}

interface SesionClasesResponse {
    sesionclase: SesionClaseType[];
}

@Injectable({
    providedIn: 'root',
})

export class SesionClaseService {
    constructor(private apollo: Apollo) {
    }

    public async getSesionClase() {
        const query = await this.apollo.query<SesionClaseResponse>({
            query: SESION_CLASE_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.sesionclase);
    }
}