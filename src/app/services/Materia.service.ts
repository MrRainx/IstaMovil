import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MateriaType } from '../interfaces/Materia';

const MATERIAS_QUERY = gql`
query buscarMaterias(){
    materias() {
    }
}`;

interface MateriaResponse {
    materias: MateriaType;
}

interface MateriasResponse {
    materias: MateriaType[];
}

@Injectable({
    providedIn: 'root',
})

export class MateriasService {
    constructor(private apollo: Apollo) {
    }

    public async getMaterias() {
        const query = await this.apollo.query<MateriasResponse>({
            query: MATERIAS_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.materias);
    }
}