import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { DocenteType } from '../interfaces/Docente';

const DOCENTE_QUERY = gql`
query buscarDocente($cedula: string){
    docente(cedula: $cedula) {
        id
        codigo
        otroTrabajo
        categoria
        fechaContrato
        fechaFin
        tipoTiempo
        activo
        observacion
        capacitador
        titulo
        abreviatura
        enFuncion
    }
}`;



interface DocenteResponse {
    docente: DocenteType;
}

interface DocentesResponse {
    docente: DocenteType[];
}

@Injectable({
    providedIn: 'root',
})

export class DocenteService {
    constructor(private apollo: Apollo) {
    }

    public async getDocente(cedula: string) {
        const query = await this.apollo.query<DocenteResponse>({
            query: DOCENTE_QUERY,
            variables: { cedula: cedula }
        });
        return await query.toPromise().then(res => res.data.docente);
    }
}