import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hello',
    template: `<h1>Hello {{data.name}}!</h1>`,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
    @Input() data: any;
}
