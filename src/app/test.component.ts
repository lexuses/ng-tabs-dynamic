import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <div>
      TestComponent {{ data.index }} content
    </div>
  `,
})
export class TestComponent implements OnInit {
    @Input() data: any;

    public ngOnInit() {
        console.log(`>>> TestComponent ${this.data.tab} initialized`);
    }
}
