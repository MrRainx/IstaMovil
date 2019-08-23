import { PersonaType } from './Persona';

export interface Usuario {
    username?: string;
    password?: string;
    estado?: boolean;
    persona?: PersonaType;

}
