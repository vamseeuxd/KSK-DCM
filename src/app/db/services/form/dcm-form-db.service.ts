import {Injectable} from '@angular/core';
import {DbConstants} from '../../../shared/DB_CONSTANTS';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/internal/operators';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class DcmFormDbService {

    private listRef: AngularFireList<IDcmForm>;
    private list$: Observable<any[]>;
    private list: IDcmForm[] = [];

    constructor(private db: AngularFireDatabase) {
        this.listRef = this.db.list(DbConstants.DCM_FORM);
        this.list$ = this.listRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        );
        this.list$.subscribe(forms => {
            this.list.splice(0, this.list.length);
            forms.forEach(form => {
                this.list.push(form);
            });
        });
    }

    public get(): Observable<IDcmForm[]> {
        return this.list$;
    }

    getItemByKey(key: string): IDcmForm {
        const filteredItem = this.list.filter(item => item.key === key);
        return filteredItem.length > 0 ? filteredItem[0] : null;
    }

    public getFormsByProp(prop: string, value: string): IDcmForm[] {
        return this.list.filter(form => form[prop] === value);
    }

    addItem(dcmForm: IDcmForm) {
        this.listRef.push(dcmForm);
    }

    updateItem(dcmForm: IDcmForm) {
        this.listRef.update(dcmForm.key, dcmForm);
    }

    deleteItem(dcmForm: IDcmForm) {
        this.listRef.remove(dcmForm.key);
    }

    deleteEverything() {
        this.listRef.remove();
    }
}

export interface IDcmForm {
    key?: string;
    title: string;
    time: any;
    name: string;
    module: string;
}

