import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { NotaType } from '../interfaces/Nota';

const NOTAS_QUERY = gql`
query buscarNotas(){
    notas() {
    }
}`;



interface NotaResponse {
    notas: NotaType;
}

interface NotasResponse {
    notas: NotaType[];
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
            variables: {}
        });
        return await query.toPromise().then(res => res.data.notas);
    }
}