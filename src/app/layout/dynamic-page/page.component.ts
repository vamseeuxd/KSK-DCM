import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blank-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    currentModule = '';

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            console.log(params);
            this.currentModule = params.module;
        });
    }

    ngOnInit() {
    }
}
