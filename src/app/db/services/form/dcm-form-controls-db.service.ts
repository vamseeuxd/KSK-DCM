import {Injectable} from '@angular/core';
import {DbConstants} from '../../../shared/DB_CONSTANTS';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/internal/operators';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {FormController} from '../../../shared/modules/ksk-dynamic-form/form-controller';

@Injectable({
    providedIn: 'root'
})
export class DcmFormControlsDbService {

    private listRef: AngularFireList<any>;
    private list$: Observable<any[]>;
    private list: FormController[] = [];

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
        });
    }

    public get(): Observable<FormController[]> {
        return this.list$;
    }

    addItem(dcmForm: FormController) {
        this.listRef.push(dcmForm);
    }

    updateItem(dcmForm: FormController) {
        this.listRef.update(dcmForm.key, dcmForm);
    }

    public getFormsByProp(prop: string, value: string): FormController[] {
        return this.list.filter(form => form[prop] === value);
    }

    deleteItem(dcmForm: FormController) {
        this.listRef.remove(dcmForm.key);
    }

    deleteEverything() {
        this.listRef.remove();
    }
}
