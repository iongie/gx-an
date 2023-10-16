import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavRailComponent } from './nav-rail/nav-rail.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { TopBarDirective } from '../directives/topBar/top-bar.directive';
import { BottomBarDirective } from '../directives/bottomBar/bottom-bar.directive';
import { NavBarDirective } from '../directives/navBar/nav-bar.directive';
import { MainComponent } from './main/main.component';
import { TabComponent } from './tab/tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { ProgressComponent } from './progress/progress.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    TopBarDirective,
    BottomBarDirective,
    NavBarDirective,
    ButtonComponent,
    TopBarComponent,
    CardComponent,
    DividerComponent,
    BadgeComponent,
    BottomBarComponent,
    NavBarComponent,
    NavDrawerComponent,
    NavRailComponent,
    NavItemComponent,
    MainComponent,
    TabComponent,
    TabItemComponent,
    ProgressComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TopBarDirective,
    BottomBarDirective,
    NavBarDirective,
    ButtonComponent,
    TopBarComponent,
    CardComponent,
    DividerComponent,
    BadgeComponent,
    BottomBarComponent,
    NavBarComponent,
    NavDrawerComponent,
    NavRailComponent,
    NavItemComponent,
    MainComponent,
    TabComponent,
    TabItemComponent,
    ProgressComponent,
    SnackBarComponent
  ]
})
export class ComponentsModule { }
