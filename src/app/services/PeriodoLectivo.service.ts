import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PeriodoLectivoType } from '../interfaces/PeriodoLectivo';

const PERIODO_LECTIVO_QUERY = gql`
query buscarPeriodoLectivo(){
    periodolectivo() {
    }
}`;



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