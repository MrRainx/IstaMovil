import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CarreraType } from './Carreras';

const MATERIAS_QUERY = gql`
query buscarMaterias(){
    materias() {
    }
}`;

export interface MateriasType {
    id?: number;
    carrera?: CarreraType;
    codigo?: string;
    nombre?: string;
    ciclo?: number;
    creditos?: number;
    tipo?: string;
    categoria?: string;
    tipoAcreditacion?: string;
    horasDocencia?: number;
    horasPracticas?: number;
    horasAutoEstudio?: number;
    horasPresencial?: number;
    totalHoras?: number;
    activa?: boolean;
    objetivo?: string;
    descripcion?: string;
    objetivoEspecifico?: string;
    organizacionCurricular?: string;
    campoFormacion?: string;
    nucleo?: boolean;
}

interface MateriaResponse {
    materias: MateriasType;
}

interface MateriasResponse {
    materias: MateriasType[];
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