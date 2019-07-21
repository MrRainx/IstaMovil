import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { SesionClaseType } from '../interfaces/SesionClase';

const SESION_CLASE_QUERY = gql`
query buscarSesionClase(){
    sesionclase() {
    }
}`;


interface SesionClaseResponse {
    sesionclase: SesionClaseType;
}

interface SesionClasesResponse {
    sesionclase: SesionClaseType[];
}

@Injectable({
    providedIn: 'root',
})

export class SesionClaseService {
    constructor(private apollo: Apollo) {
    }

    public async getSesionClase() {
        const query = await this.apollo.query<SesionClaseResponse>({
            query: SESION_CLASE_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.sesionclase);
    }
}