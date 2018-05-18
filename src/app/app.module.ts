import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import {TabService} from './tab.service';
import {TabDirective} from './tab.directive';
import {TabComponent} from './tab.component';
import {TabsContainerComponent} from './tabs-container.component';
import {TabNavigationComponent} from './tab-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    TabDirective,
    TabComponent,
    TabsContainerComponent,
    TabNavigationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TabService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ HelloComponent ]
})
export class AppModule { }
