import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AlumnoCurso } from '../interfaces/AlumnoCurso';

const ALUMNOS_CURSO_NOTAS = gql`
query getAlumnosCurso($cedulaDocente: String!, $idPeriodo: Int!, $cursoNombre: String!, $nombreMateria: String!) {
  alumnosCurso(cedulaDocente: $cedulaDocente, idPeriodo: $idPeriodo, cursoNombre: $cursoNombre, nombreMateria: $nombreMateria) {
    id
    asistencia
    notaFinal
    estado
    numFaltas
    notasSet {
      id
      valor
      tipoNota {
        id
        nombre
      }
    }
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
  alumnocurso: AlumnoCurso;
}

interface AlumnosCursosResponse {
  alumnosCurso: AlumnoCurso[];
}

@Injectable({
  providedIn: 'root',
})

export class AlumnoCursoService {

  public alumnos: AlumnoCurso[];

  constructor(private apollo: Apollo) {
  }

  public getAlumnoCurso(cedula: string, idPeriodo: number, cursoNombre: string, nombreMateria: string) {
    console.log(cedula)
    console.log(idPeriodo)
    console.log(cursoNombre)
    console.log(nombreMateria)

    return this.apollo.query<AlumnosCursosResponse>({
      query: ALUMNOS_CURSO_NOTAS,
      variables: {
        cedulaDocente: cedula,
        idPeriodo: idPeriodo,
        cursoNombre: cursoNombre,
        nombreMateria: nombreMateria
      }
    });
  }

  public getAlumnoById(idAlumno: number) {
    return this.alumnos.filter(item => item.id == idAlumno)[0];
  }


}