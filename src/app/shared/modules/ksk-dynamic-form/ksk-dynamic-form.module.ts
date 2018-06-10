import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {KskDynamicFormComponent} from './ksk-dynamic-form.component';
import {FormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TagInputModule
    ],
    declarations: [KskDynamicFormComponent],
    exports: [KskDynamicFormComponent]
})
export class KskDynamicFormModule {
}
