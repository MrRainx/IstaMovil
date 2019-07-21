import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AlumnoCursoType } from '../interfaces/AlumnoCurso';

const ALUMNO_CURSO_QUERY = gql`
query buscarAlumnoCurso(){
    alumnocurso() {
    }
}`;



interface AlumnoCursoResponse {
    alumnocurso: AlumnoCursoType;
}

interface AlumnosCursosResponse {
    alumnocurso: AlumnoCursoType[];
}

@Injectable({
    providedIn: 'root',
})

export class AlumnoCursoService {
    constructor(private apollo: Apollo) {
    }

    public async getAlumnoCurso() {
        const query = await this.apollo.query<AlumnoCursoResponse>({
            query: ALUMNO_CURSO_QUERY,
            variables: {}
        });
        return await query.toPromise().then(res => res.data.alumnocurso);
    }
}