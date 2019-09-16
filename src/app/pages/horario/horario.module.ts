import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorarioPage } from './horario.page';
import { ComponentsModule } from '../../components/components.module';
import { CardHorarioComponent } from './components/card-horario/card-horario.component';

const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorarioPage, CardHorarioComponent]
})
export class HorarioPageModule { }
