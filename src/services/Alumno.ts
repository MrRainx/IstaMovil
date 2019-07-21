import { PersonaType } from './Persona';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { SectorEconomicoType } from './SectorEconomico';

const ALUMNO_QUERY = gql`
query buscarAlumno($cedula: String){
    alumno(cedula: $cedula) {
        id
        persona
        sectorEconomico
        codigo
        tipoColegio
        tipoBachillerato
        anioGraduacion
        educacionSuperior
        tituloSuperior
        nivelAcademico
        pension
        ocupacion
        trabaja
        nivelFormacionPadre
        nivelFormacionMadre
        nombreContactoEmergencia
        parentescoContacto
        numeroContacto
        activo
        observacion
    }
}`;

export interface AlumnoType {
    id?: number;
    persona?: PersonaType;
    sectorEconomico?: SectorEconomicoType;
    codigo?: string;
    tipoColegio?: string;
    tipoBachillerato?: string;
    anioGraduacion?: string;
    educacionSuperior?: boolean;
    tituloSuperior?: string;
    nivelAcademico?: string;
    pension?: boolean;
    ocupacion?: string;
    trabaja?: boolean;
    nivelFormacionPadre?: string;
    nivelFormacionMadre?: string;
    nombreContactoEmergencia?: string;
    parentescoContacto?: string;
    numeroContacto?: string;
    activo?: boolean;
    observacion?: string;
}

interface AlumnoResponse {
    alumno: AlumnoType;
}

interface AlumnosResponse {
    alumno: AlumnoType[];
}

@Injectable({
    providedIn: 'root',
})

export class AlumnoService {
    constructor(private apollo: Apollo) {
    }

    public async getAlumno(cedula: string) {
        const query = await this.apollo.query<AlumnoResponse>({
            query: ALUMNO_QUERY,
            variables: { cedula: cedula }
        });
        return await query.toPromise().then(res => res.data.alumno);
    }
}