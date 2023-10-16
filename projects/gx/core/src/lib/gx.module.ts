import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { BottomBarDirective } from './bottom-bar/bottom-bar.directive';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarDirective } from './nav-bar/nav-bar.directive';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavRailComponent } from './nav-rail/nav-rail.component';
import { ProgressComponent } from './progress/progress.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabComponent } from './tab/tab.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarDirective } from './top-bar/top-bar.directive';



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
export class GxModule { }
