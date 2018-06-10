import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {map} from 'rxjs/internal/operators';
import {DbConstants} from '../../../shared/DB_CONSTANTS';
import {Observable} from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class DcmModuleDbService {
    private listRef: AngularFireList<IDcmModule>;
    private list$: Observable<any[]>;
    private list: IDcmModule[] = [];

    constructor(private db: AngularFireDatabase) {
        this.listRef = this.db.list(DbConstants.DCM_MODULES);
        this.list$ = this.listRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        );
        this.list$.subscribe((modules: IDcmModule[]) => {
            this.list.splice(0, this.list.length);
            modules.forEach(module => {
                this.list.push(module);
            });
            console.log(this.list.filter(item => item.key === '-LEXQTz6PPix51ZjH4W2'));
        });
    }

    getItemByKey(key: string): IDcmModule {
        const filteredItem = this.list.filter(item => item.key === key);
        return filteredItem.length > 0 ? filteredItem[0] : null;
    }

    public get(): Observable<IDcmModule[]> {
        return this.list$;
    }

    addItem(dcmModule: IDcmModule) {
        this.listRef.push(dcmModule);
    }

    updateItem(dcmModule: IDcmModule) {
        this.listRef.update(dcmModule.key, dcmModule);
    }

    deleteItem(dcmModule: IDcmModule) {
        this.listRef.remove(dcmModule.key);
    }

    deleteEverything() {
        this.listRef.remove();
    }
}

export interface IDcmModule {
    key?: string;
    icon: string;
    time: any;
    title: string;
}
