import { PersonaType } from './Persona';
import { SectorEconomicoType } from './SectorEconomico';

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