import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DcmModuleDbService} from './services/module/dcm-module-db.service';
import {DcmFormDbService} from './services/form/dcm-form-db.service';
import {DcmFormControlsDbService} from './services/form/dcm-form-controls-db.service';
import {AddModulesFormComponent} from './components/module/add-modules-form/add-modules-form.component';
import {AddDynamicFormComponent} from './components/form/add-dynamic-form/add-dynamic-form.component';
import {KskDynamicFormModule} from '../shared/modules';
import {DataTableModule} from 'angular5-data-table';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AddFormControllerComponent } from './components/controller/add-form-controller/add-form-controller.component';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
    imports: [
        CommonModule,
        KskDynamicFormModule,
        DataTableModule,
        NgbTabsetModule,
        FormsModule,
        NgPipesModule
    ],
    declarations: [
        AddDynamicFormComponent,
        AddModulesFormComponent,
        AddFormControllerComponent
    ],
    entryComponents: [
        AddDynamicFormComponent,
        AddModulesFormComponent,
        AddFormControllerComponent
    ]
})
export class DcmDbModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DcmDbModule,
            providers: [
                DcmModuleDbService,
                DcmFormDbService,
                DcmFormControlsDbService
            ]
        };
    }
}
