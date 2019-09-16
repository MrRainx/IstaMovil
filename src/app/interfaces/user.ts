import { PersonaType } from './Persona';


export class User {
    username?: string;
    password?: string;
    estado?: boolean;
    loggedIn?: boolean;
    persona?: PersonaType;
    roles?: string[]
}
