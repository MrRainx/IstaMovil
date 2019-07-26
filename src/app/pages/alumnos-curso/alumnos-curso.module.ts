import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlumnosCursoPage } from './alumnos-curso.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosCursoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlumnosCursoPage]
})
export class AlumnosCursoPageModule {}
