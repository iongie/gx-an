import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route: Routes = [
  {
    path: '',
    component: MediumComponent
  }
]

@NgModule({
  declarations: [
    MediumComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class MediumModule { }
