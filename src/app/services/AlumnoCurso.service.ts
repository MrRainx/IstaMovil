import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AlumnoCursoType } from '../interfaces/AlumnoCurso';

const ALUMNOS_CURSO_NOTAS = gql`
query getAlumnosCurso($cedulaDocente: String!, $idPeriodo: Int!, $cursoNombre: String!, $idMateria: Int!) {
  alumnosCurso(cedulaDocente: $cedulaDocente, idPeriodo: $idPeriodo, cursoNombre: $cursoNombre, idMateria: $idMateria) {
    id
    asistencia
    notaFinal
    estado
    numFaltas
    numMatricula
    alumno {
      id
      persona {
        id
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        Foto
      }
    }
  }
}
`;



interface AlumnoCursoResponse {
    alumnocurso: AlumnoCursoType;
}

interface AlumnosCursosResponse {
    alumnosCurso: AlumnoCursoType[];
}

@Injectable({
    providedIn: 'root',
})

export class AlumnoCursoService {

    constructor(private apollo: Apollo) {
    }

    public getAlumnoCurso({ cedula, idPeriodo, cursoNombre, idMateria }) {
        return this.apollo.query<AlumnosCursosResponse>({
            query: ALUMNOS_CURSO_NOTAS,
            variables: {
                cedulaDocente: cedula,
                idPeriodo: idPeriodo,
                cursoNombre: cursoNombre,
                idMateria: idMateria
            }
        });
    }
}