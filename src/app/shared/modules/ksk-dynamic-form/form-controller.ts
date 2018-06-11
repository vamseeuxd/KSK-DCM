import {FormControllerType} from './form-controller-type';
import {MenuItem} from './menu-item';

export class FormController {
    public key: string;
    public form: string;
    public module: string;
    public label: string;
    public classes: string;
    public value: any;
    public labelField = 'display';
    public idField = 'id';
    public required: boolean;
    public disabled: boolean;
    public hide: boolean;
    public customError: string;
    public name: string;
    public min: any;
    public max: any;
    public data: MenuItem[];
    public types: string[];
    public type: FormControllerType;
    public errorMessage = this.label + ' is required.';

    constructor({min, max, label, value, classes = 'col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3', labelField = 'display', idField = 'id', required = true, disabled = false, hide = false, name, data, type, types}) {
        this.label = label;
        this.value = value;
        this.classes = classes;
        this.required = required;
        this.disabled = disabled;
        this.name = name;
        this.data = data;
        this.type = type;
        this.hide = hide;
        this.min = min;
        this.max = max;
        this.types = types;
        this.labelField = labelField;
        this.idField = idField;
        this.errorMessage = this.label + ' is required.';
    }

    public onChange(formController: FormController): void {

    }
}

/*
https://www.youtube.com/watch?v=az6cqU2F4Yo
*/
