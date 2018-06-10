import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormController, FormControllerType} from '../../shared/modules';
import {Input} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    animations: [routerTransition()]
})
export class CustomersComponent {

    formController = new FormController({
        classes: 'vamsee',
        value: null,
        types: null,
        min: 3,
        max: 50,
        label: 'Form Controller Label',
        name: 'label',
        type: FormControllerType.text,
        data: null
    });
    settings = {
        hideSubHeader: true,
        attr: {
            class: 'table table-bordered'
        },
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            classes: {
                title: 'Classes',
            },
            value: {
                title: 'Value',
            },
            types: {
                title: 'Types',
            },
            min: {
                title: 'Min',
            },
            max: {
                title: 'Max',
            },
            label: {
                title: 'Label',
            },
            name: {
                title: 'Name',
            },
            type: {
                title: 'Type',
            },
            data: {
                title: 'Data',
            }
        },
    };
    data = [
        {
            'classes': 'asdf',
            'value': 'asdf',
            'types': 'fasdf',
            'min': 'asdf',
            'max': 'asdf',
            'label': 'asdf',
            'name': 'asdf',
            'type': 'fasdf',
            'data': 'fasdf'
        },
        {
            'classes': 'ASDF',
            'value': 'FAS',
            'types': 'ASDF',
            'min': 'FQ',
            'max': 'FASDF',
            'label': 'FASD',
            'name': 'FASD',
            'type': 'fasdf',
            'data': 'fasdf'
        }
    ];

    constructor() {
    }
}
