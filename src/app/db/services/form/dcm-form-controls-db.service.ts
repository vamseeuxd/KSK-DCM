import {Injectable} from '@angular/core';
import {DbConstants} from '../../../shared/DB_CONSTANTS';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/internal/operators';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {FormController, FormControllerType} from '../../../shared/modules';

@Injectable({
    providedIn: 'root'
})
export class DcmFormControlsDbService {

    private listRef: AngularFireList<any>;
    private list$: Observable<any[]>;
    private list: IDcmFormControl[] = [];

    constructor(private db: AngularFireDatabase) {
        this.listRef = this.db.list(DbConstants.DCM_FORM_CONTROLS);
        this.list$ = this.listRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => {
                    return {key: c.payload.key, ...c.payload.val()};
                })
            )
        );
        this.list$.subscribe(forms => {
            this.list.splice(0, this.list.length);
            forms.forEach(form => {
                this.list.push(form);
            });
            console.log(this.list);
        });
    }

    public get(): Observable<IDcmFormControl[]> {
        return this.list$;
    }

    addItem(dcmFormControl: IDcmFormControl) {
        delete dcmFormControl.key;
        this.listRef.push(dcmFormControl);
    }

    updateItem(dcmFormControl: IDcmFormControl) {
        const _key = JSON.parse(JSON.stringify(dcmFormControl.key));
        delete dcmFormControl.key;
        this.listRef.update(_key, dcmFormControl);
    }

    public getFormsByProp(prop: string, value: string): IDcmFormControl[] {
        return this.list.filter(form => form[prop] === value);
    }

    public convertIDcmForcontrolToFormController(item: IDcmFormControl): FormController {
        let newFormConroll: FormController;
        newFormConroll = new FormController(
            {
                label: item.label,
                value: item.value,
                classes: item.classes,
                required: item.required,
                disabled: item.disabled,
                name: item.name,
                data: item.data,
                type: item.type,
                hide: item.hide,
                min: item.min,
                max: item.max,
                types: item.types,
                labelField: item.labelField,
                idField: item.idField,
            }
        );
        newFormConroll.key = item.key ? item.key : '';
        newFormConroll.form = item.form ? item.form : '';
        newFormConroll.module = item.module ? item.module : '';
        newFormConroll.label = item.label ? item.label : '';
        newFormConroll.classes = item.classes ? item.classes : '';
        newFormConroll.value = item.value ? item.value : '';
        newFormConroll.labelField = item.labelField ? item.labelField : '';
        newFormConroll.idField = item.idField ? item.idField : '';
        newFormConroll.required = item.required;
        newFormConroll.disabled = item.disabled;
        newFormConroll.hide = item.hide;
        newFormConroll.index = item.index;
        newFormConroll.name = item.name ? item.name : '';
        newFormConroll.min = item.min ? item.min : '';
        newFormConroll.max = item.max ? item.max : '';
        newFormConroll.data = item.data ? item.data : [];
        newFormConroll.types = item.types ? item.types : [];
        newFormConroll.type = item.type as FormControllerType;
        return newFormConroll;
    }

    deleteItem(dcmFormControl: IDcmFormControl) {
        this.listRef.remove(dcmFormControl.key);
    }

    deleteEverything() {
        this.listRef.remove();
    }
}

export interface IDcmFormControl {
    key?: string;
    form: string;
    index: number;
    module: string;
    label: string;
    classes: string;
    value: any;
    labelField: string;
    idField: string;
    required: boolean;
    disabled: boolean;
    hide: boolean;
    customError: string;
    name: string;
    min: any;
    max: any;
    data: { id: string; display: string; isSelected: boolean }[];
    types: string[];
    type: string;
    errorMessage: string;
}
