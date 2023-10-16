import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallComponent } from './small.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route: Routes = [
  {
    path: '',
    component: SmallComponent
  }
]

@NgModule({
  declarations: [
    SmallComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class SmallModule { }
