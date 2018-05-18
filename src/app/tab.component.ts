import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
  SimpleChanges,
  OnChanges} from '@angular/core';

import { TabDirective } from './tab.directive';
import { TabItem } from './tab-item';

@Component({
  selector: 'app-tab',
  template: `
              <div class="tab--active">
                <h3>Active Tab</h3>
                <ng-template appTabHost></ng-template>
              </div>
            `
})
export class TabComponent implements OnInit, OnDestroy, OnChanges {
  @Input() tabs: TabItem[];
  @Input() activeIndex: number;
  @ViewChild(TabDirective) tabHost: TabDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {}

  loadComponent() {
    let tabItem = this.tabs[this.activeIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabItem.component);

    let viewContainerRef = this.tabHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = tabItem.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadComponent();
  }
}
