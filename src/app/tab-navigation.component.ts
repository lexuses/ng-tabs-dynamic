import { Component, Input } from '@angular/core';
import {TabItem} from './tab-item';

@Component({
  selector: 'app-tab-navigation',
  template: `<div [ngClass]="{'tabs__title': true, 'tabs__title--active': activeIndex === index}">Tab #<b>{{ index }}</b></div>`,
  styles: []
})
export class TabNavigationComponent {
  @Input() tab: TabItem;
  @Input() index: number;
  @Input() activeIndex: number;
}
