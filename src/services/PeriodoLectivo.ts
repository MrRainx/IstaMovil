import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CarreraType } from './Carreras';

const PERIODO_LECTIVO_QUERY = gql`
query buscarPeriodoLectivo(){
    periodolectivo() {
    }
}`;

export interface PeriodoLectivoType {
    id?: number;
    carrera?: CarreraType;
    nombre?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    observacion?: string;
    estado?: boolean;
    activo?: boolean;
    numeroCierre?: number;
}

interface PeriodoLectivoResponse {
    periodolectivo: PeriodoLectivoType;
}

interface PeriodosLectivosResponse {
    periodolectivo: PeriodoLectivoType[];
}

@Injectable({
    providedIn: 'root',
})

export class PeriodoLectivoService {
    constructor(private apollo: Apollo) {
    }

    public async getPeriodoLectivo() {
        const query = await this.apollo.query<PeriodoLectivoResponse>({
            query: PERIODO_LECTIVO_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.periodolectivo);
    }
}