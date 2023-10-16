import { Component } from '@angular/core';
import { BadgeModel } from '../../components/badge/badge.enum';
import { ButtonModel } from '../../components/button/button.enum';
import { CardType } from '../../components/card/card.enum';
import { MainModel } from '../../components/main/main.enum';
import { NavDrawerModel } from '../../components/nav-drawer/nav-drawer.enum';
import { NavItemModel } from '../../components/nav-item/nav-item.enum';
import { TopBarModel } from '../../components/top-bar/top-bar.enum';

@Component({
  selector: 'gxd-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent {
  modelTopBar: string = TopBarModel.small;
  titleTopBar: string = 'Soccer Live Score';
  modelMain: string = MainModel.center;
  modelButton: string = ButtonModel.outlined;
  modelCard: string = CardType.outlined;
  modelBadge: string = BadgeModel.large;
  modelNavBarItem: string = NavItemModel.navbar;
  modelNavDrawer: string = NavDrawerModel.standar;
  modelNavDrawerItem: string = NavItemModel.navdrawer;

  menuBarHover(ev: any){
    console.log(ev);
  }
}
