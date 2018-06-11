import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageRoutingModule} from './page-routing.module';
import {PageComponent} from './page.component';
import {FormsModule} from '@angular/forms';
import { GridFilterPipe } from './pipe/grid-filter.pipe';


@NgModule({
    imports: [CommonModule, PageRoutingModule, FormsModule],
    declarations: [PageComponent, GridFilterPipe]
})
export class PageModule {
}
