import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PeriodoLectivoType } from './PeriodoLectivo';

const TIPO_NOTA_QUERY = gql`
query buscarTipoNota(){
    tiponota() {
    }
}`;

export interface TipoNotaType {
    id?: number;
    nombre?: string;
    valorMinimo?: number;
    valorMaximo?: number;
    fechaCreacion?: Date;
    estado?: boolean;
    periodoLectivo?: PeriodoLectivoType;
}

interface TipoNotaResponse {
    tiponota: TipoNotaType;
}

interface TipoNotasResponse {
    tiponota: TipoNotaType[];
}

@Injectable({
    providedIn: 'root',
})

export class TipoNotaService {
    constructor(private apollo: Apollo) {
    }

    public async getTipoNota() {
        const query = await this.apollo.query<TipoNotaResponse>({
            query: TIPO_NOTA_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.tiponota);
    }
}