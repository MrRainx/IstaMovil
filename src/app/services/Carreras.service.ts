import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CarreraType } from '../interfaces/Carreras';

const CARRERA_QUERY = gql`
query buscarCarrera(){
    carrera() {
    }
}`;

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