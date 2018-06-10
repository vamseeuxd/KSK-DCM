import {Component, OnInit} from '@angular/core';
import {FormController, FormControllerType} from '../../../../shared/modules/index';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';
import * as firebase from 'firebase';
import {DbConstants} from '../../../../shared/DB_CONSTANTS';
import {DcmModuleDbService, IDcmModule} from '../../../services/module/dcm-module-db.service';


@Component({
    selector: 'app-add-modules-form',
    templateUrl: './add-modules-form.component.html',
    styleUrls: ['./add-modules-form.component.scss']
})
export class AddModulesFormComponent implements OnInit {

    public formControls: FormController[] = [];
    public moduleTitleController: FormController;
    public moduleIconController: FormController;
    public listRef: AngularFireList<any>;
    public list: Observable<any>;
    public currentModule: IDcmModule;
    public saveButtonLabel = 'Add Module';

    constructor(public activeModal: NgbActiveModal, public db: AngularFireDatabase, public dcmModuleDb: DcmModuleDbService) {
        this.subscribeList();
        this.initializeFormControllers();
        this.formControls.push(this.moduleTitleController);
        this.formControls.push(this.moduleIconController);
    }

    initializeFormControllers(): void {
        this.moduleTitleController = new FormController({
            classes: 'col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2',
            value: '',
            types: null,
            min: 3,
            max: 50,
            label: 'Module Title',
            name: 'moduleTitle',
            type: FormControllerType.text,
            data: null
        });
        this.moduleIconController = new FormController({
            classes: 'col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2',
            value: '',
            types: null,
            min: 3,
            max: 50,
            label: 'Module Icon',
            name: 'icon',
            type: FormControllerType.text,
            data: null
        });
    }

    subscribeList() {
        this.listRef = this.db.list(DbConstants.DCM_MODULES);
        this.list = this.listRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        );
    }

    ngOnInit() {
    }

    onCancelClick(form) {
        this.saveButtonLabel = 'Add Module';
        for (let i = 0; i < this.formControls.length; i++) {
            this.formControls[i].value = '';
        }
        form.reset();
        this.currentModule = null;
    }

    onFormSave($event: FormController[], form) {
        if (this.saveButtonLabel === 'Add Module') {
            this.dcmModuleDb.addItem(
                {
                    title: this.moduleTitleController.value,
                    icon: this.moduleIconController.value,
                    time: firebase.database.ServerValue.TIMESTAMP
                }
            );
        } else {
            this.currentModule.title = this.moduleTitleController.value;
            this.currentModule.icon = this.moduleIconController.value;
            this.dcmModuleDb.updateItem(this.currentModule);
        }
        this.onCancelClick(form);
    }

    closeModel(crossClick: string) {
        this.activeModal.dismiss(crossClick);
    }

    deleteModule(module: IDcmModule) {
        const confirm = window.confirm('Are you sure! do you what to delete module?');
        if (confirm) {
            this.dcmModuleDb.deleteItem(module);
        }
    }

    editModule(module: IDcmModule) {
        this.saveButtonLabel = 'Update Module';
        this.moduleTitleController.value = module.title;
        this.moduleIconController.value = module.icon;
        this.currentModule = module;
    }
}
