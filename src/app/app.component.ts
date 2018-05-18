import {Component, OnInit} from '@angular/core';
import {TabItem} from './tab-item';
import {TabService} from './tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  tabs: TabItem[];
  activeIndex = 1;

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabs = this.tabService.getTabs();
  }

  public dec() {
    if (this.tabs.length > 0 && this.activeIndex === this.tabs.length - 1) {
      this.activeIndex = 0;
    }
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    console.log('add tab');
    // this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
    this.tabs.push(
      this.tabService.newTab('Add Test')
    );
  }

  onTabChanged(index) {
    this.activeIndex = index;
  }
}
