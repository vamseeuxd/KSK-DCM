import {Injectable} from '@angular/core';
import {DbConstants} from '../../../shared/DB_CONSTANTS';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/internal/operators';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

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
        this.listRef.update(dcmFormControl.key, dcmFormControl);
    }

    public getFormsByProp(prop: string, value: string): IDcmFormControl[] {
        return this.list.filter(form => form[prop] === value);
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
}
