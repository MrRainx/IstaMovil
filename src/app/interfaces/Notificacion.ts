import { PersonaType } from './Persona';
export interface Notificacion {
    id?: number
    titulo?: string
    mensaje?: string
    estado?: boolean
    emisor?: PersonaType
    receptor?: PersonaType
}