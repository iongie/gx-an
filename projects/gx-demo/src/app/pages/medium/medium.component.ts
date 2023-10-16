import { Component } from '@angular/core';
import { MainModel } from '../../components/main/main.enum';
import { TopBarModel } from '../../components/top-bar/top-bar.enum';
import { ButtonModel } from '../../components/button/button.enum';

@Component({
  selector: 'gxd-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent {
  modelTopBar: string = TopBarModel.large;
  titleTopBar: string = 'Soccer Live Score';
  modelMain: string = MainModel.large;
  modelButton: string = ButtonModel.outlined;
  menuBarHover(ev: any){
    console.log(ev);
  }
}
