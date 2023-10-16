import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route: Routes = [
  {
    path: '',
    component: CenterComponent
  }
]


@NgModule({
  declarations: [
    CenterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class CenterModule { }
