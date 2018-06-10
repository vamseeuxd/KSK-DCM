import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormController, FormControllerType, MenuItem} from '../../../../shared/modules/index';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DcmModuleDbService, IDcmModule} from '../../../services/module/dcm-module-db.service';
import {DcmFormDbService, IDcmForm} from '../../../services/form/dcm-form-db.service';
import {DcmFormControlsDbService} from '../../../services/form/dcm-form-controls-db.service';
import * as firebase from 'firebase';
import {AddFormControllerComponent} from '../../controller/add-form-controller/add-form-controller.component';

@Component({
    selector: 'app-add-dynamic-form',
    templateUrl: './add-dynamic-form.component.html',
    styleUrls: ['./add-dynamic-form.component.scss']
})
export class AddDynamicFormComponent {

    public mainFormControls: FormController[] = [];
    public data: FormController[] = [];
    public showMainPrimaryButton = false;
    public showMainSecondaryButton = false;
    public showMainForm = false;
    private formControllerClass = 'col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-2';

    public moduleController: FormController;
    public formSelectController: FormController;
    public newFormTitleController: FormController;
    public newFormNameController: FormController;

    public labelController: FormController;
    public desktopWidthController: FormController;
    public tabWidthController: FormController;
    public mobileWidthController: FormController;
    public requiredController: FormController;
    public nameController: FormController;
    public minValueController: FormController;
    public maxValueController: FormController;
    public minDateController: FormController;
    public maxDateController: FormController;
    public dataController: FormController;
    public typesController: FormController;
    private isMainFormSave = false;
    public disableDeleteButton = true;
    private allFormsInModule: IDcmForm[] = [];

    constructor(
        public activeModal: NgbActiveModal,
        public dcmModule: DcmModuleDbService,
        public dcmForm: DcmFormDbService,
        public dcmFormControls: DcmFormControlsDbService,
        private modalService: NgbModal
    ) {
        this.initializeMainFormControls();
        this.dcmFormControls.get().subscribe(controls => {
            this.data.splice(0, this.data.length);
            this.data.push(...controls);
        });
    }

    getFilteredData(formID): FormController [] {
        return this.data.filter(item => item.form === formID);
    }

    addModuleController(): void {
        this.moduleController = new FormController({
            classes: this.formControllerClass,
            value: '',
            types: null,
            min: null,
            max: null,
            label: 'Select Module',
            name: 'module',
            type: FormControllerType.select,
            data: []
        });
        this.allFormsInModule.splice(0, this.allFormsInModule.length);
        this.allFormsInModule.push(...this.dcmForm.getFormsByProp('module', this.moduleController.value));
        this.moduleController.onChange = formControl => {
            if (formControl.value) {
                this.updateFormSelectData(formControl);
                this.formSelectController.value = '';
                this.formSelectController.hide = false;
                this.newFormTitleController.hide = true;
                this.newFormNameController.hide = true;
                this.showMainPrimaryButton = false;
                this.showMainSecondaryButton = false;
            }
            this.allFormsInModule.splice(0, this.allFormsInModule.length);
            this.allFormsInModule.push(...this.dcmForm.getFormsByProp('module', this.moduleController.value));
            this.disableDeleteButton = this.formSelectController.value === 'null' || this.formSelectController.value === '';
        };
        this.mainFormControls.push(this.moduleController);
    }

    addFormSelectController(): void {
        this.formSelectController = new FormController({
            classes: this.formControllerClass,
            value: '',
            types: null,
            min: null,
            max: null,
            label: 'Select Form',
            name: 'form',
            type: FormControllerType.select,
            data: []
        });
        this.mainFormControls.push(this.formSelectController);
        this.formSelectController.onChange = formControl => {
            if (formControl.value === 'null') {
                this.formSelectController.hide = true;
                this.newFormTitleController.hide = false;
                this.newFormNameController.hide = false;
                this.showMainPrimaryButton = true;
                this.showMainSecondaryButton = true;
            }
            this.disableDeleteButton = formControl.value === 'null' || formControl.value === '';
        };
        this.formSelectController.hide = true;
    }

    addNewFormTitleController(): void {
        this.newFormTitleController = new FormController({
            classes: this.formControllerClass,
            value: '',
            types: null,
            min: 3,
            max: 50,
            label: 'Form Title',
            name: 'formTitle',
            type: FormControllerType.text,
            data: null
        });
        this.newFormTitleController.onChange = formControl => {
            if (this.allFormsInModule.filter(item => item.title.toLowerCase() === formControl.value.toLowerCase()).length > 0) {
                formControl.customError = 'Duplicate Title found.' + formControl.value + ' Exists';
            } else {
                formControl.customError = '';
            }
        };
        this.mainFormControls.push(this.newFormTitleController);
        this.newFormTitleController.hide = true;
    }

    addNewFormNameController(): void {
        this.newFormNameController = new FormController({
            classes: this.formControllerClass,
            value: '',
            types: null,
            min: 3,
            max: 50,
            label: 'Form Name',
            name: 'formName',
            type: FormControllerType.text,
            data: null
        });
        this.mainFormControls.push(this.newFormNameController);
        this.newFormNameController.onChange = formControl => {
            formControl.value = formControl.value.replace(/[^a-zA-Z]/g, '');
            if (formControl.value) {
                let splitString: string[];
                splitString = formControl.value.split('');
                splitString[0] = splitString[0].toLowerCase();
                formControl.value = splitString.join('');
            }
            if (this.allFormsInModule.filter(item => item.name.toLowerCase() === formControl.value.toLowerCase()).length > 0) {
                formControl.customError = 'Duplicate name found.' + formControl.value + ' Exists';
            } else {
                formControl.customError = '';
            }
        };
        this.newFormNameController.hide = true;
    }

    subScribeModules(): void {
        this.dcmModule.get().subscribe(modules => {
            this.moduleController.data.splice(0, this.moduleController.data.length);
            modules.forEach(module => {
                const newModule = new MenuItem({id: module.key, display: module.title, isSelected: false});
                this.moduleController.data.push(newModule);
                this.showMainForm = true;
            });
        });
    }

    subScribeForms(): void {
        this.dcmForm.get().subscribe(forms => {
            this.updateFormSelectData(this.moduleController);
            if (this.isMainFormSave) {
                this.formSelectController.value = this.formSelectController.data[this.formSelectController.data.length - 1].id;
                this.isMainFormSave = false;
                this.newFormTitleController.value = '';
                this.newFormNameController.value = '';
                this.formSelectController.hide = false;
                this.newFormTitleController.hide = true;
                this.newFormNameController.hide = true;
                this.showMainPrimaryButton = false;
                this.showMainSecondaryButton = false;
                this.disableDeleteButton = false;
            }
        });
    }

    initializeMainFormControls(): void {
        this.addModuleController();
        this.addFormSelectController();
        this.addNewFormTitleController();
        this.addNewFormNameController();
        this.subScribeModules();
        this.subScribeForms();
    }

    updateFormSelectData(formControl: FormController): void {
        this.formSelectController.data.splice(0, this.formSelectController.data.length);
        this.formSelectController.data.push({id: '', display: 'Select Form', isSelected: false});
        this.formSelectController.data.push({id: 'null', display: 'Add New Form', isSelected: false});
        this.formSelectController.data.push(...this.dcmForm.getFormsByProp('module', formControl.value).map(form => new MenuItem({
            id: form.key,
            display: form.title,
            isSelected: false
        })));
    }

    closeModel(crossClick: string) {
        this.activeModal.dismiss(crossClick);
    }

    deleteController(item: FormController) {
        this.dcmFormControls.deleteItem(item);
    }

    mainFormSave($event: FormController[], mainForm) {
        const newForm: IDcmForm = {
            module: this.moduleController.value,
            time: firebase.database.ServerValue.TIMESTAMP,
            title: this.newFormTitleController.value,
            name: this.newFormNameController.value
        };
        this.dcmForm.addItem(newForm);
        this.isMainFormSave = true;
        mainForm.reset();
    }

    mainFormCancel($event: FormController[], mainForm) {
        this.moduleController.value = '';
        this.formSelectController.value = '';
        this.newFormTitleController.value = '';
        this.newFormNameController.value = '';
        this.formSelectController.hide = true;
        this.newFormTitleController.hide = true;
        this.newFormNameController.hide = true;
        this.showMainPrimaryButton = false;
        this.showMainSecondaryButton = false;
        mainForm.reset();
    }

    deleteForm() {
        const isConfirm = window.confirm('Are you sure! do you want to delete Form? All associated field also delete.');
        if (isConfirm) {

            this.getFilteredData(this.formSelectController.value).forEach(formControl => {
                this.deleteController(formControl);
            });

            this.dcmForm.deleteItem({key: this.formSelectController.value, name: '', title: '', time: '', module: ''});
            this.formSelectController.value = '';
            this.disableDeleteButton = true;
        }
    }

    addNewFormField() {
        const addFormControllerModal = this.modalService.open(AddFormControllerComponent, {
            backdrop: false,
            windowClass: 'app-add-form-controller'
        });
        addFormControllerModal.componentInstance.setData(this.formSelectController.value, false, null);
    }

    editController(item) {
        const addFormControllerModal = this.modalService.open(AddFormControllerComponent, {
            backdrop: false,
            windowClass: 'app-add-form-controller'
        });
        addFormControllerModal.componentInstance.setData(this.formSelectController.value, true, item);
    }
}
