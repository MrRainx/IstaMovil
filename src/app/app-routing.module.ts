import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'informacion', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'horario', loadChildren: './pages/horario/horario.module#HorarioPageModule' },
  { path: 'notas', loadChildren: './pages/notas/notas.module#NotasPageModule' },
  { path: 'notas-detail', loadChildren: './pages/notas/notas-detail/notas-detail.module#NotasDetailPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'testing', loadChildren: './pages/testing/testing.module#TestingPageModule' },  { path: 'calendario', loadChildren: './pages/calendario/calendario.module#CalendarioPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
