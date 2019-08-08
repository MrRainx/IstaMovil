import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'informacion',
    loadChildren: './pages/informacion/informacion.module#InformacionPageModule'
  },
  {
    path: 'form-notas/:cedula',
    loadChildren: './pages/form-notas/form-notas.module#FormNotasPageModule'
  },
  { path: 'alumnos-curso/:cedulaDocente/:idPeriodo/:cursoNombre/:nombreMateria', loadChildren: './pages/alumnos-curso/alumnos-curso.module#AlumnosCursoPageModule' },

  { path: 'notas-alumno/:idAlumno', loadChildren: './pages/notas-alumno/notas-alumno.module#NotasAlumnoPageModule' }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
