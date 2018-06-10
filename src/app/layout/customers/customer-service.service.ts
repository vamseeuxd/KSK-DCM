import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    public listRef: AngularFireList<any>;
    public list: Observable<any>;

    public controlRef: AngularFireList<any>;
    public controls: Observable<any>;

    constructor(private db: AngularFireDatabase) {
        this.initializeList('customers/list');
        this.initializeControls('customers/controls');
    }

    /* ---------------------------- List related functionality ---------------------------- */
    addData(data: any) {
        this.listRef.push(data);
    }

    initializeList(listName: string) {
        this.listRef = this.db.list(listName);
        this.list = this.listRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        );
    }

    /* ---------------------------- List related functionality ---------------------------- */

    /* ---------------------------- Controls related functionality ---------------------------- */
    initializeControls(constrolName) {
        this.controlRef = this.db.list(constrolName);
        this.controls = this.controlRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        );
    }

    addControl(control: any) {
        this.controlRef.push(control);
    }

    /* ---------------------------- Controls related functionality ---------------------------- */
}
