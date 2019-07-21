import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { DocenteType } from './Docente';

const CARRERA_QUERY = gql`
query buscarCarrera(){
    carrera() {
    }
}`;

export interface CarreraType {
    id?: number;
    docenteCoordinador?: DocenteType;
    nombre?: string;
    codigo?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    modalidad?: string;
    activo?: boolean;
    semanas?: number;
}

interface CarreraResponse {
    carrera: CarreraType;
}

interface CarrerasResponse {
    carrera: CarreraType[];
}

@Injectable({
    providedIn: 'root',
})

export class CarreraService {
    constructor(private apollo: Apollo) {
    }

    public async getCarrera() {
        const query = await this.apollo.query<CarreraResponse>({
            query: CARRERA_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.carrera);
    }
}