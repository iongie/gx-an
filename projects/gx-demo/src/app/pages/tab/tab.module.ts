import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route: Routes = [
  {
    path: '',
    component: TabComponent
  }
]


@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class TabModule { }
