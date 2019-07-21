import { PersonaType } from './Persona';

export interface UsuarioType {
    username?: string;
    password?: string;
    estado?: boolean;
    persona?: PersonaType;
    
}
