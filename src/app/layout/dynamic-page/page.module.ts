import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRoutingModule} from './page-routing.module';
import {PageComponent} from './page.component';


@NgModule({
    imports: [CommonModule, PageRoutingModule],
    declarations: [PageComponent]
})
export class PageModule {}
