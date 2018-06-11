import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blank-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    currentModule = '';
    public data = [];

    public value1 = '';
    public value2 = '';
    public value3 = '';
    public value4 = '';

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            console.log(params);
            this.currentModule = params.module;
        });
        for (let i = 0; i < 20; i++) {
            this.data.push({
                'Col-1': 'Row Data 1-' + i,
                'Col-2': 'Row Data 2-' + i,
                'Col-3': 'Row Data 3-' + i,
                'Col-4': 'Row Data 4-' + i
            });
        }
    }

    getFilterConfig(): any {
        return {'Col-1': this.value1, 'Col-2': this.value2, 'Col-3': this.value3, 'Col-4': this.value4};
    }

    getColumns(): string[] {
        return Object.keys(this.data[0]);
    }

    ngOnInit() {
    }
}
