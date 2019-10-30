import { PersonaType } from './Persona';
export interface Notificacion {
    id?: number
    titulo?: string
    mensaje?: string
    activo?: boolean
}



export interface DetalleNotificacion {
    id?: number;
    activo?: boolean;
    emisor?: PersonaType;
    receptor?: PersonaType;
    notificacion?: Notificacion;
}