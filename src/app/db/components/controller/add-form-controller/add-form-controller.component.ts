import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormController, FormControllerType, MenuItem} from '../../../../shared/modules';
import {DcmFormControlsDbService} from '../../../services/form/dcm-form-controls-db.service';
import {DcmModuleDbService, IDcmModule} from '../../../services/module/dcm-module-db.service';
import {DcmFormDbService, IDcmForm} from '../../../services/form/dcm-form-db.service';

@Component({
    selector: 'app-add-form-controller',
    templateUrl: './add-form-controller.component.html',
    styleUrls: ['./add-form-controller.component.scss']
})
export class AddFormControllerComponent implements OnInit {

    public formControls: FormController[] = [];
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
    private formControllerClass = 'col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-2';
    private dataControllerClass = 'col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-2';
    public data = [];
    public module: IDcmModule;
    public form: IDcmForm;
    private selectedForm = '-LEb2baCbeD5A7Fa1a5j';
    public isEdit = false;
    public editingField = '';
    public editingFieldOptions: FormController;
    public editingKey = '';
    public allControlsInForm: FormController[] = [];

    constructor(
        public activeModal: NgbActiveModal,
        public dcmModule: DcmModuleDbService,
        public dcmForm: DcmFormDbService,
        public dcmFormControls: DcmFormControlsDbService,
    ) {
        this.initializeFormControls();
    }

    setData(selectedForm, isEdit: boolean, formController: FormController): void {
        this.selectedForm = selectedForm;
        this.isEdit = isEdit;
        this.dcmFormControls.get().subscribe(controls => {
            this.form = this.dcmForm.getItemByKey(this.selectedForm);
            this.module = this.dcmModule.getItemByKey(this.form.module);
            this.data.splice(0, this.data.length);
            this.data.push(...controls.map(item => this.dcmFormControls.convertIDcmForcontrolToFormController(item)));
        });
        this.editingKey = '';
        if (isEdit) {
            this.editingFieldOptions = JSON.parse(JSON.stringify(formController));
            this.setEditData(this.editingFieldOptions);
        }
    }

    setEditData(formController: FormController): void {
        this.editingField = JSON.parse(JSON.stringify(formController.label));
        this.editingKey = formController.key;

        this.labelController.value = formController.label;
        this.labelController.onChange(this.labelController);

        this.desktopWidthController.value = formController.classes.split(' ').filter(z => z.indexOf('md') >= 0)[0];
        this.desktopWidthController.onChange(this.desktopWidthController);

        this.tabWidthController.value = formController.classes.split(' ').filter(z => z.indexOf('sm') >= 0)[0];
        this.tabWidthController.onChange(this.tabWidthController);

        this.mobileWidthController.value = formController.classes.split(' ').filter(z => z.indexOf('xs') >= 0)[0];
        this.mobileWidthController.onChange(this.mobileWidthController);

        this.requiredController.value = formController.required ? '1' : '0';
        this.requiredController.onChange(this.requiredController);

        this.nameController.value = formController.name ? formController.name : '';
        this.nameController.onChange(this.nameController);

        this.minValueController.value = formController.min ? formController.min : 0;
        this.minValueController.onChange(this.minValueController);

        this.maxValueController.value = formController.max ? formController.max : 0;
        this.maxValueController.onChange(this.maxValueController);

        this.minDateController.value = formController.min ? formController.min : '';
        this.minDateController.onChange(this.minDateController);

        this.maxDateController.value = formController.max ? formController.max : '';
        this.maxDateController.onChange(this.maxDateController);

        this.dataController.value = formController.data ? formController.data : [];
        this.dataController.onChange(this.dataController);

        this.typesController.value = formController.type ? formController.type : '';
        this.typesController.onChange(this.typesController);
    }

    ngOnInit() {
    }

    initializeFormControls(): void {
        for (let i = 3; i < this.formControls.length; i++) {
            this.formControls[i].value = null;
        }
        this.labelController = new FormController({
            classes: this.formControllerClass,
            value: '',
            types: null,
            min: 3,
            max: 50,
            label: 'Label',
            name: 'label',
            type: FormControllerType.text,
            data: null
        });
        this.desktopWidthController = new FormController({
            classes: this.formControllerClass,
            value: 'col-md-4',
            types: null,
            min: null,
            max: null,
            label: 'Desktop Width',
            name: 'desktopWidth',
            type: FormControllerType.select,
            data: this.getWidthData('md')
        });
        this.tabWidthController = new FormController({
            classes: this.formControllerClass,
            value: 'col-sm-4',
            types: null,
            min: null,
            max: null,
            label: 'Tab Width',
            name: 'tabWidth',
            type: FormControllerType.select,
            data: this.getWidthData('sm')
        });
        this.mobileWidthController = new FormController({
            classes: this.formControllerClass,
            value: 'col-xs-12',
            types: null,
            min: null,
            max: null,
            label: 'Mobile Width',
            name: 'mobileWidth',
            type: FormControllerType.select,
            data: this.getWidthData('xs')
        });
        this.requiredController = new FormController({
            classes: this.formControllerClass,
            value: '1',
            types: null,
            min: null,
            max: null,
            label: 'Is Mandatory',
            name: 'required',
            type: FormControllerType.radio,
            data: [new MenuItem({id: '1', display: 'Yes', isSelected: false}), new MenuItem({id: '0', display: 'No', isSelected: false})]
        });
        this.nameController = new FormController({
            classes: this.formControllerClass,
            value: '',
            types: null,
            min: 3,
            max: 50,
            label: 'Name',
            name: 'name',
            type: FormControllerType.text,
            data: null
        });
        this.minValueController = new FormController({
            classes: this.formControllerClass,
            value: '0',
            types: null,
            min: 1,
            max: 50,
            label: 'Min Value',
            name: 'minValue',
            type: FormControllerType.number,
            data: null
        });
        this.maxValueController = new FormController({
            classes: this.formControllerClass,
            value: '0',
            types: null,
            min: 1,
            max: 50,
            label: 'Max Value',
            name: 'maxValue',
            type: FormControllerType.number,
            data: null
        });
        this.minDateController = new FormController({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: null,
            max: null,
            label: 'Min Date',
            name: 'minDate',
            type: FormControllerType.date,
            data: null
        });
        this.maxDateController = new FormController({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: null,
            max: null,
            label: 'Max Date',
            name: 'maxDate',
            type: FormControllerType.date,
            data: null
        });
        this.dataController = new FormController({
            classes: this.dataControllerClass,
            idField: 'value',
            value: [
                {'display': 'Option 1', 'value': 'Option 1'},
                {'display': 'Option 2', 'value': 'Option 2'},
                {'display': 'Option 3', 'value': 'Option 3'},
                {'display': 'Option 4', 'value': 'Option 4'},
                {'display': 'Option 5', 'value': 'Option 5'}],
            types: null,
            min: 3,
            max: 5,
            label: 'Data',
            name: 'data',
            type: FormControllerType.tags,
            data: null
        });
        this.typesController = new FormController({
            classes: this.formControllerClass,
            value: 'text',
            types: null,
            min: null,
            max: null,
            label: 'Type',
            name: 'type',
            type: FormControllerType.select,
            data: this.getTypeData()
        });
        this.minValueController.hide = false;
        this.maxValueController.hide = false;
        this.minDateController.hide = true;
        this.maxDateController.hide = true;
        this.dataController.hide = true;
        this.nameController.customError = '';
        this.addChangeCallBacksToFormControllers();
        this.createFormControllersGroup();
    }

    addChangeCallBacksToFormControllers(): void {
        this.typesController.onChange = newController => {
            if (
                newController.value === FormControllerType.select ||
                newController.value === FormControllerType.checkbox ||
                newController.value === FormControllerType.radio
            ) {
                this.minValueController.hide = true;
                this.maxValueController.hide = true;
                this.minDateController.hide = true;
                this.maxDateController.hide = true;
                this.dataController.hide = false;
            } else if (
                newController.value === FormControllerType.date ||
                newController.value === FormControllerType.datetime ||
                newController.value === FormControllerType.month
            ) {
                this.minValueController.hide = true;
                this.maxValueController.hide = true;
                this.minDateController.hide = false;
                this.minDateController.type = newController.value;
                this.maxDateController.hide = false;
                this.maxDateController.type = newController.value;
                this.dataController.hide = true;
            } else {
                this.minDateController.hide = true;
                this.maxDateController.hide = true;
                this.minValueController.hide = false;
                this.maxValueController.hide = false;
                this.dataController.hide = true;
            }
        };
        this.nameController.onChange = formControl => {
            // formControl.value = formControl.value.replace(/[^a-zA-Z]/g, '');
            formControl = formControl.value.replace(/[^a-zA-Z0-9]/g, '');
            if (formControl.value) {
                let splitString: string[];
                splitString = formControl.value.split('');
                splitString[0] = splitString[0].toLowerCase();
                formControl.value = splitString.join('');
            }
            if (this.form) {
                if (this.isEdit) {
                    if (this.editingFieldOptions.name !== this.nameController.value) {
                        this.allControlsInForm.splice(0, this.allControlsInForm.length);
                        this.allControlsInForm.push(...this.dcmFormControls.getFormsByProp('form', this.form.key).map(item => this.dcmFormControls.convertIDcmForcontrolToFormController(item)));
                        if (this.allControlsInForm.filter(item => {
                            return item.name.toLowerCase().trim() === this.nameController.value.toLowerCase().trim();
                        }).length > 0) {
                            this.nameController.customError = 'Duplicate name found. ' + this.nameController.value + ' Exists';
                        } else {
                            this.nameController.customError = '';
                        }
                    } else {
                        this.nameController.customError = '';
                    }
                } else {
                    this.allControlsInForm.splice(0, this.allControlsInForm.length);
                    this.allControlsInForm.push(...this.dcmFormControls.getFormsByProp('form', this.form.key).map(item => this.dcmFormControls.convertIDcmForcontrolToFormController(item)));
                    if (this.allControlsInForm.filter(item => {
                        return item.name.toLowerCase().trim() === this.nameController.value.toLowerCase().trim();
                    }).length > 0) {
                        this.nameController.customError = 'Duplicate name found. ' + this.nameController.value + ' Exists';
                    } else {
                        this.nameController.customError = '';
                    }
                }

            }
        };
    }

    private getTypeData(): MenuItem[] {
        return [
            new MenuItem({id: 'text', display: 'Text Input', isSelected: false}),
            new MenuItem({id: 'checkbox', display: 'Check Box', isSelected: false}),
            new MenuItem({id: 'date', display: 'Date', isSelected: false}),
            new MenuItem({id: 'datetime-local', display: 'Date and Time', isSelected: false}),
            new MenuItem({id: 'email', display: 'Email', isSelected: false}),
            new MenuItem({id: 'file', display: 'File', isSelected: false}),
            new MenuItem({id: 'month', display: 'Month', isSelected: false}),
            new MenuItem({id: 'number', display: 'Number', isSelected: false}),
            new MenuItem({id: 'select', display: 'Drop Down', isSelected: false}),
            new MenuItem({id: 'radio', display: 'Radio', isSelected: false}),
            new MenuItem({id: 'password', display: 'Password', isSelected: false}),
        ];
    }

    createFormControllersGroup(): void {
        this.formControls.splice(0, this.formControls.length);
        this.formControls = [
            this.labelController,
            this.typesController,
            this.nameController,
            this.requiredController,
            this.minValueController,
            this.maxValueController,
            this.minDateController,
            this.maxDateController,
            this.desktopWidthController,
            this.tabWidthController,
            this.mobileWidthController,
            this.dataController
        ];
    }

    getWidthData(size: string): MenuItem[] {
        return [
            new MenuItem({id: 'col-' + size + '-1', display: 'Size 01', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-2', display: 'Size 02', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-3', display: 'Size 03', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-4', display: 'Size 04', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-5', display: 'Size 05', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-6', display: 'Size 06', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-7', display: 'Size 07', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-8', display: 'Size 08', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-9', display: 'Size 09', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-10', display: 'Size 10', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-11', display: 'Size 11', isSelected: false}),
            new MenuItem({id: 'col-' + size + '-12', display: 'Size 12', isSelected: false}),
        ];
    }

    closeModel(crossClick: string) {
        this.activeModal.dismiss(crossClick);
    }

    onCancelClick() {
        if (this.isEdit) {
            this.setEditData(this.editingFieldOptions);
        } else {
            this.initializeFormControls();
        }
    }

    onFormSave($event: FormController[], form) {
        const newFormField = this.getNewDynamicFormController();
        if (this.isEdit) {
            this.dcmFormControls.updateItem(newFormField);
        } else {
            this.dcmFormControls.addItem(newFormField);
        }
        this.onCancelClick();
        form.reset();
        this.closeModel('Added Form Controller');
    }

    getNewDynamicFormController(): FormController {
        let newController: FormController;
        if (
            this.typesController.value === FormControllerType.select ||
            this.typesController.value === FormControllerType.checkbox ||
            this.typesController.value === FormControllerType.radio
        ) {
            newController = new FormController(
                {
                    classes: this.mobileWidthController.value + ' ' + this.desktopWidthController.value + ' ' + this.tabWidthController.value,
                    value: null,
                    types: null,
                    idField: 'value',
                    labelField: 'display',
                    required: this.requiredController.value ? true : false,
                    name: this.nameController.value,
                    max: null,
                    min: null,
                    label: this.labelController.value,
                    type: this.typesController.value,
                    data: this.dataController.value
                }
            );
        } else if (
            this.typesController.value === FormControllerType.date ||
            this.typesController.value === FormControllerType.datetime ||
            this.typesController.value === FormControllerType.month
        ) {
            newController = new FormController(
                {
                    classes: this.mobileWidthController.value + ' ' + this.desktopWidthController.value + ' ' + this.tabWidthController.value,
                    value: null,
                    types: null,
                    required: this.requiredController.value ? true : false,
                    name: this.nameController.value,
                    max: this.maxDateController.value,
                    min: this.minDateController.value,
                    label: this.labelController.value,
                    type: this.typesController.value,
                    data: [],
                }
            );
        } else {
            newController = new FormController(
                {
                    classes: this.mobileWidthController.value + ' ' + this.desktopWidthController.value + ' ' + this.tabWidthController.value,
                    value: null,
                    types: null,
                    required: this.requiredController.value ? true : false,
                    name: this.nameController.value,
                    max: this.maxValueController.value,
                    min: this.minValueController.value,
                    label: this.labelController.value,
                    type: this.typesController.value,
                    data: [],
                }
            );
        }
        newController.key = this.editingKey;
        newController.form = this.form.key;
        newController.module = this.module.key;
        return newController;
    }
}
