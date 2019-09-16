import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'informacion', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },  { path: 'horario', loadChildren: './pages/horario/horario.module#HorarioPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
