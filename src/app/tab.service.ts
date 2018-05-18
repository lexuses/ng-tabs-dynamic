import { Injectable } from '@angular/core';

import { TabItem } from './tab-item';
import { HelloComponent } from './hello.component';

@Injectable()
export class TabService {
  getTabs() {
    return [
      new TabItem(HelloComponent, {name: 'Alex'}),
      new TabItem(HelloComponent, {name: 'Mathew'}),
      new TabItem(HelloComponent, {name: 'Gorge'}),
      new TabItem(HelloComponent, {name: 'Bill'}),
    ];
  }

  newTab(name) {
    return new TabItem(HelloComponent, {name});
  }
}
