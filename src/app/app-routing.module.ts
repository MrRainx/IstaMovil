import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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

  { path: 'periodos/:cedula', loadChildren: './pages/periodos/periodos.module#PeriodosPageModule' },
  { path: 'cursos/:cedula/:idPeriodo', loadChildren: './pages/cursos/cursos.module#CursosPageModule' },
  { path: 'materias/:cedula/:idPeriodo/:cursoNombre', loadChildren: './pages/materias/materias.module#MateriasPageModule' },
  { path: 'alumnos-curso/:cedula/:idPeriodo/:cursoNombre/:idMateria', loadChildren: './pages/alumnos-curso/alumnos-curso.module#AlumnosCursoPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'informacion', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
