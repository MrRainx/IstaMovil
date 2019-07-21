import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';

const SECTOR_ECONOMICO_QUERY = gql`
query buscarSectorEconomico(){
    sectoreconomico() {
    }
}`;

export interface SectorEconomicoType {
    id?: number;
    codigo?: string;
    descripcion?: string;
    activo?: boolean;
}

interface SectorEconomicoResponse {
    sectoreconomico: SectorEconomicoType;
}

interface SectoresEconomicosResponse {
    sectoreconomico: SectorEconomicoType[];
}

@Injectable({
    providedIn: 'root',
})

export class SectorEconomicoService {
    constructor(private apollo: Apollo) {
    }

    public async getSectorEconomico() {
        const query = await this.apollo.query<SectorEconomicoResponse>({
            query: SECTOR_ECONOMICO_QUERY,
            variables: { }
        });
        return await query.toPromise().then(res => res.data.sectoreconomico);
    }
}