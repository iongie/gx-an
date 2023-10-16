import { Component } from '@angular/core';
import { BadgeModel } from '../../components/badge/badge.enum';
import { ButtonModel } from '../../components/button/button.enum';
import { CardType } from '../../components/card/card.enum';
import { MainModel } from '../../components/main/main.enum';
import { NavDrawerModel } from '../../components/nav-drawer/nav-drawer.enum';
import { NavItemModel } from '../../components/nav-item/nav-item.enum';
import { TopBarModel } from '../../components/top-bar/top-bar.enum';
import { SnackBarModel } from '../../components/snack-bar/snack-bar.enum';

@Component({
  selector: 'gxd-tab-page',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  modelTopBar: string = TopBarModel.tab;
  titleTopBar: string = 'Soccer Live Score';
  modelMain: string = MainModel.large;
  modelButton: string = ButtonModel.outlined;
  modelCard: string = CardType.outlined;
  modelBadge: string = BadgeModel.large;
  modelNavBarItem: string = NavItemModel.navbar;
  modelNavDrawer: string = NavDrawerModel.standar;
  modelNavDrawerItem: string = NavItemModel.navdrawer;
  modelSnackBar: string = SnackBarModel.small;
  modelSnackBarButton: string = ButtonModel.none;

  menuBarHover(ev: any){
    console.log(ev);
  }
}
