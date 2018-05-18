import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTabHost]',
})
export class TabDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

