import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TabItem} from './tab-item';

@Component({
  selector: 'app-tabs-container',
  template: `
    <h2>Tabs:</h2>
    <app-tab-navigation
      [ngClass]="'tabs__titles'"
      *ngFor="let tab of tabs; let i = index"
      [tab]="tab"
      [index]="i"
      [activeIndex]="activeIndex"
      (click)="showTab(i)"
    ></app-tab-navigation>
  `,
  styles: []
})
export class TabsContainerComponent {
  @Input() tabs: TabItem[];
  @Input() activeIndex: number;
  @Output() tabChanged = new EventEmitter<boolean>();

  showTab(index) {
    this.tabChanged.emit(index);
  }
}
