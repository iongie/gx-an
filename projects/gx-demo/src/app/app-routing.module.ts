import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path:'small',
    loadChildren: () => import('./pages/small/small.module').then(m => m.SmallModule)
  },
  {
    path:'center',
    loadChildren: () => import('./pages/center/center.module').then(m => m.CenterModule)
  },
  {
    path:'tab',
    loadChildren: () => import('./pages/tab/tab.module').then(m => m.TabModule)
  },
  {
    path:'medium',
    loadChildren: () => import('./pages/medium/medium.module').then(m => m.MediumModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
