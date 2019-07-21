import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AlumnoCursoType } from './AlumnoCurso';
import { TipoNotaType } from './TipoNota';

const NOTAS_QUERY = gql`
query buscarNotas(){
    notas() {
    }
}`;

export interface NotasType {
    id?: number;
    valor?: number;
    alumnoCurso?: AlumnoCursoType;
    tipoNota?: TipoNotaType;
}

interface NotaResponse {
    notas: NotasType;
}

interface NotasResponse {
    notas: NotasType[];
}

@Injectable({
    providedIn: 'root',
})

export class NotasService {
    constructor(private apollo: Apollo) {
    }

    public async getNotas() {
        const query = await this.apollo.query<NotaResponse>({
            query: NOTAS_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.notas);
    }
}