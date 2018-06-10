import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule, NgbModalModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {DcmDbModule} from '../db/dcm-db.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbModalModule.forRoot(),
        NgbDropdownModule.forRoot(),
        NgbTabsetModule.forRoot(),
        DcmDbModule,
        NgbTabsetModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
    ],
    providers: []
})
export class LayoutModule {
}
