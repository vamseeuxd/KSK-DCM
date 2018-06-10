import {Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from './menu-item';
import {FormControllerType} from './form-controller-type';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {FormController} from './form-controller';

@Component({
    selector: 'app-ksk-dynamic-form',
    templateUrl: './ksk-dynamic-form.component.html',
    styleUrls: ['./ksk-dynamic-form.component.scss']
})
export class KskDynamicFormComponent implements DoCheck {
    public type = FormControllerType;
    public result = true;
    @Input() formControls: FormController[] = [];
    @Input() isValid = false;
    @Input() title = '';
    @Input() showPrimaryButton = true;
    @Input() showSecondaryButton = true;
    @Input() primaryButtonLabel = 'Save';
    @Input() secondaryButtonLabel = 'Cancel';
    @Output() formControlsChange: EventEmitter<FormController[]> = new EventEmitter<FormController[]>();
    @Output() primaryClick: EventEmitter<FormController[]> = new EventEmitter<FormController[]>();
    @Output() secondaryClick: EventEmitter<FormController[]> = new EventEmitter<FormController[]>();
    public isFormValidated = '';
    public isAllErrors;
    public isDuplicatesFound = false;
    public duplicateControllerName = [];

    ngDoCheck() {
        this.isFormValid();
        this.duplicateControllerName.splice(0, this.duplicateControllerName.length);
        for (let i = 0; i < this.formControls.length; i++) {
            const temp_Arr = this.formControls.filter(item => item.name === this.formControls[i].name);
            if (temp_Arr.length > 1) {
                if (this.duplicateControllerName.indexOf(this.formControls[i].name) < 0) {
                    this.duplicateControllerName.push(this.formControls[i].name);
                }
            }
        }
        this.isDuplicatesFound = (this.duplicateControllerName.length > 0);
        this.isFormValid();
    }

    isNameExistes(nameToCheck: string): boolean {
        return this.formControls.filter(item => item.name === nameToCheck).length > 0;
    }

    reset(): void {
        this.isFormValidated = '';
    }

    isFormValid(): void {
        this.isAllErrors = this.formControls.map(control => this.getErrorMessage(control));
        const isAllValid = this.formControls.map(control => this.getErrorMessage(control).length === 0);
        const isAnyCustomErrors = this.formControls.filter(control => {
            if (control.customError) {
                return control.customError.trim().length !== 0;
            } else {
                return false;
            }
        });
        this.isValid = isAllValid.indexOf(false) < 0 && isAnyCustomErrors.length === 0;
    }

    updateCheckBoxValue(formControl: FormController, item: MenuItem) {
        if (formControl.type === this.type.checkbox) {
            if (!formControl.value) {
                formControl.value = [];
            }
            if (formControl.value.indexOf(item.id) < 0) {
                formControl.value.push(item.id);
            } else {
                formControl.value.splice(formControl.value.indexOf(item.id), 1);
            }
        }
        this.formControlsChange.emit(this.formControls);
    }

    getErrorMessage(formControl: FormController): string {
        if (formControl.disabled || formControl.hide) {
            return '';
        }
        if (formControl.type === this.type.text) {
            return this.getTextValidationMessage(formControl);
        }
        if (formControl.type === this.type.date) {
            return this.getDateValidationMessage(formControl, 'DD-MM-YYYY');
        }
        if (formControl.type === this.type.datetime) {
            return this.getDateValidationMessage(formControl, 'DD-MM-YYYY HH:mm ss');
        }
        if (formControl.type === this.type.number) {
            return this.getNumberValidationMessage(formControl);
        }
        if (formControl.type === this.type.file) {
            return formControl.errorMessage;
        }
        if (formControl.type === this.type.tags) {
            return this.getTagsErrorMessage(formControl);
        }
        if (formControl.type === this.type.select) {
            return (formControl.value && formControl.value.trim().length > 0) ? '' : ('Provide valid ' + formControl.label);
        }
        return '';
    }

    getTextValidationMessage(formControl: FormController): string {
        if (formControl.required && !formControl.disabled && !formControl.hide) {
            if (!formControl.value) {
                return 'Provide valid ' + formControl.label;
            } else if (formControl.min && formControl.max && (!(formControl.value.length >= formControl.min && formControl.value.length <= formControl.max))) {
                return 'Provide valid ' + formControl.label + ' in between ' + formControl.min + ' to ' + formControl.max;
            } else if (formControl.min && formControl.value.length < formControl.min) {
                return 'Provide valid ' + formControl.label + ' should more  than or equal to' + formControl.min;
            } else if (formControl.max && formControl.value.length > formControl.max) {
                return 'Provide valid ' + formControl.label + ' should less  than or equal to' + formControl.max;
            } else {
                return '';
            }
        }
    }

    getDateValidationMessage(formControl: FormController, format: string): string {
        if (formControl.required && !formControl.disabled && !formControl.hide) {
            const selectedDate = moment(formControl.value);
            const minDate = moment(formControl.min);
            const maxDate = moment(formControl.max);
            if (!formControl.value) {
                return 'Provide valid ' + formControl.label;
            } else if (formControl.min && formControl.max && (!selectedDate.isBetween(minDate, maxDate))) {
                return 'Provide valid ' + formControl.label + ' in between ' + formControl.min + ' to ' + formControl.max;
            } else if (formControl.min && (!selectedDate.isSameOrAfter(minDate))) {
                return 'Provide valid ' + formControl.label + ' should more than or equal to ' + formControl.min;
            } else if (formControl.max && (!selectedDate.isSameOrBefore(maxDate))) {
                return 'Provide valid ' + formControl.label + ' should less than or equal to ' + formControl.max;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    getNumberValidationMessage(formControl: FormController): string {
        if (formControl.required && !formControl.disabled && !formControl.hide) {
            if (!formControl.value) {
                return 'Provide valid ' + formControl.label;
            } else if (formControl.min && formControl.max && (!(formControl.value >= formControl.min && formControl.value <= formControl.max))) {
                return 'Provide valid ' + formControl.label + ' in between ' + formControl.min + ' to ' + formControl.max;
            } else if (formControl.min && formControl.value < formControl.min) {
                return 'Provide valid ' + formControl.label + ' should more than ' + formControl.min;
            } else if (formControl.max && formControl.value > formControl.max) {
                return 'Provide valid ' + formControl.label + ' should less than ' + formControl.max;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    isCheckBoxValid(formControl: FormController): string {
        return (this.isFormValidated !== ' was-validated' ? 'form-control' : (formControl.value.length > 0 ? 'form-control is-valid' : 'form-control is-invalid'));
    }

    isRadioGroupValid(formControl: FormController): string {
        return (this.isFormValidated !== ' was-validated' ? 'form-control' : (formControl.value ? 'form-control is-valid' : 'form-control is-invalid'));
    }

    isTagsGroupValid(formControl: FormController): string {
        return (
            this.isFormValidated !== ' was-validated' ?
                'form-control' :
                (this.getTagsErrorMessage(formControl).length === 0 ? 'form-control is-valid' :
                    'form-control is-invalid')
        );
    }

    primaryButtonClick(isValid: boolean) {
        this.isFormValidated = ' was-validated';
        if (isValid) {
            this.primaryClick.emit(this.formControls);
        }
    }

    onFileChange($event, formControl: FormController) {
        const errorMessages = [];
        if ($event.currentTarget.files.length > 0) {
            if ($event.currentTarget.files[0].size <= formControl.max) {

            } else {
                errorMessages.push('File size must ' + Math.round(formControl.max / 1024) + ' Kilobytes or below');
            }

            if (formControl.types.indexOf($event.currentTarget.files[0].type) >= 0) {

            } else {
                errorMessages.push('File type must ' + formControl.types.join(' or '));
            }
        } else {
            if (formControl.required) {
                errorMessages.push(formControl.label + ' is required.');
            }
        }
        formControl.errorMessage = errorMessages.join(' and ');
    }

    isFileInputValid(formControl: FormController): string {
        return (formControl.errorMessage && this.isFormValidated) ? 'form-control is-invalid' : 'form-control';
    }

    private getTagsErrorMessage(formControl: FormController): string {

        if (formControl.required && !formControl.disabled && !formControl.hide) {
            if ((formControl.min && formControl.max) && (!(formControl.value.length >= formControl.min && formControl.value.length <= formControl.max))) {
                return 'Provide valid ' + formControl.label + ' in between ' + formControl.min + ' to ' + formControl.max;
            } else if (formControl.min && formControl.value.length < formControl.min) {
                return 'Provide more than ' + (formControl.min - 1) + ' valid ' + formControl.label;
            } else if (formControl.max && formControl.value.length > formControl.max) {
                return 'Provide less than ' + (formControl.max + 1) + ' valid ' + formControl.label;
            } else if (formControl.value.length === 0) {
                return 'Provide valid ' + formControl.label;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    getHelpText(formControl: FormController): string {
        let helpTexts: string[];
        helpTexts = [];
        const requiredText = this.getRequiredHelp(formControl);
        const minMaxText = this.getMinMaxHelp(formControl);
        if (requiredText.trim().length > 0) {
            helpTexts.push(requiredText);
        }
        if (minMaxText.trim().length > 0) {
            helpTexts.push(minMaxText);
        }
        return formControl.label + ' ' + helpTexts.join(' & ');
    }

    getRequiredHelp(formControl: FormController): string {
        if (formControl.required) {
            return ' is required';
        } else {
            return ' is optional';
        }
    }

    getMinMaxHelp(formControl: FormController): string {
        if (formControl.required) {
            if (formControl.min && formControl.max) {
                return ' in between ' + formControl.min + ' to ' + formControl.max + (formControl.type === this.type.text ? ' Characters' : '');
            } else if (formControl.min) {
                if (
                    formControl.type === FormControllerType.date ||
                    formControl.type === FormControllerType.datetime ||
                    formControl.type === FormControllerType.month
                ) {
                    const minDate = moment(formControl.min).subtract(1, 'd').format('DD-MM-YYYY');
                    return ' greater than ' + minDate;
                } else {
                    return ' greater than ' + (formControl.min - 1) + (formControl.type === this.type.text ? ' Characters' : '');
                }
            } else if (formControl.max) {
                if (
                    formControl.type === FormControllerType.date ||
                    formControl.type === FormControllerType.datetime ||
                    formControl.type === FormControllerType.month
                ) {
                    const maxDate = moment(formControl.max).add(1, 'd').format('DD-MM-YYYY');
                    return ' less than ' + maxDate;
                } else {
                    return ' less than ' + (formControl.max + 1) + (formControl.type === this.type.text ? ' Characters' : '');
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    secondaryButtonClick(isValid: boolean) {
        this.secondaryClick.emit(this.formControls);
    }

    getFilteredList(formControls: FormController[]): FormController[] {
        return formControls.filter(fc => !fc.hide);
    }
}
