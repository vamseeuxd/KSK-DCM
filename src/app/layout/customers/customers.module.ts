import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {PageHeaderModule} from '../../shared';
import {FormsModule} from '@angular/forms';
import {KskDynamicFormModule} from '../../shared/modules';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomersComponent} from './customers.component';

@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        FormsModule,
        PageHeaderModule,
        Ng2SmartTableModule,
        KskDynamicFormModule
    ],
    declarations: [CustomersComponent],
})
export class CustomersModule {
}
