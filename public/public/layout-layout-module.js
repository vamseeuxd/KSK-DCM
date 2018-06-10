(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add or Update Dynamic Forms</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModel('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div>\n        <ngb-tabset>\n            <ngb-tab title=\"Design\">\n                <ng-template ngbTabContent>\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <h4 class=\"mt-3 mb-3\">Create Form Config</h4>\n                            <app-ksk-dynamic-form\n                                (formControlsChange)=\"onOptionChange($event)\"\n                                class=\"col-12\"\n                                primaryButtonLabel=\"Add\"\n                                (primaryClick)=\"onFormSave($event)\"\n                                [(formControls)]=\"formControls\">\n                            </app-ksk-dynamic-form>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Preview\">\n                <ng-template ngbTabContent>\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <h4 class=\"mt-3 mb-3\">Form Preview</h4>\n                            <app-ksk-dynamic-form *ngIf=\"formFields.length>0\" class=\"col-12\" [(formControls)]=\"formFields\"></app-ksk-dynamic-form>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Config in JSON view\">\n                <ng-template ngbTabContent>\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <h4 class=\"mt-3 mb-3\">Form Config in JSON view</h4>\n                            <div class=\"mt-3 mb-3\">\n                                <pre *ngIf=\"formFields.length>0\">{{formFields|json}}</pre>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Table view\">\n                <ng-template ngbTabContent>\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <h4 class=\"mt-3 mb-3\">Form Config in Table view</h4>\n                            <ng2-smart-table class=\"table-responsive\" [(settings)]=\"settings\" [(source)]=\"formFields\"></ng2-smart-table>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/\n.dynamic-form-component {\n  background-color: rgba(0, 0, 0, 0.8); }\n  /deep/\n.dynamic-form-component .modal-lg {\n    max-width: 90% !important; }\n  .modal-body {\n  max-height: 600px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddDynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDynamicFormComponent", function() { return AddDynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/modules */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDynamicFormComponent = /** @class */ (function () {
    function AddDynamicFormComponent(activeModal) {
        var _this = this;
        this.activeModal = activeModal;
        this.formControls = [];
        this.formFields = [];
        this.settings = {
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
        this.formControllerClass = 'col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3';
        /*
            public label: string;
            public classes: string;
            public value: any;
            public required: boolean;
            public name: string;
            public min: any;
            public max: any;
            public data: MenuItem[];
        public types: string[];
            public type: FormControllerType;
        */
        this.labelController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: 3,
            max: 50,
            label: 'Label',
            name: 'label',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].text,
            data: null
        });
        this.desktopWidthController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: 'col-md-4',
            types: null,
            min: null,
            max: null,
            label: 'Desktop Width',
            name: 'desktopWidth',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].select,
            data: this.getWidthData('md')
        });
        this.tabWidthController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: 'col-sm-4',
            types: null,
            min: null,
            max: null,
            label: 'Tab Width',
            name: 'tabWidth',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].select,
            data: this.getWidthData('sm')
        });
        this.mobileWidthController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: 'col-xs-12',
            types: null,
            min: null,
            max: null,
            label: 'Mobile Width',
            name: 'mobileWidth',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].select,
            data: this.getWidthData('xs')
        });
        this.requiredController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: null,
            max: null,
            label: 'Is Mandatory',
            name: 'required',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].radio,
            data: [new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: '1', label: 'Yes', isSelected: false }), new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: '0', label: 'No', isSelected: false })]
        });
        this.nameController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: 3,
            max: 50,
            label: 'Name',
            name: 'name',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].text,
            data: null
        });
        this.minValueController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: 5,
            max: 50,
            label: 'Min Value',
            name: 'minValue',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].number,
            data: null
        });
        this.maxValueController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: 5,
            max: 50,
            label: 'Max Value',
            name: 'maxValue',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].number,
            data: null
        });
        this.minDateController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: null,
            max: null,
            label: 'Min Date',
            name: 'minDate',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].date,
            data: null
        });
        this.maxDateController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: null,
            types: null,
            min: null,
            max: null,
            label: 'Max Date',
            name: 'maxDate',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].date,
            data: null
        });
        this.dataController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: [],
            types: null,
            min: 3,
            max: 5,
            label: 'Data',
            name: 'data',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].tags,
            data: null
        });
        this.typesController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
            classes: this.formControllerClass,
            value: 'text',
            types: null,
            min: null,
            max: null,
            label: 'Type',
            name: 'type',
            type: _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].select,
            data: this.getTypeData()
        });
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
        this.minValueController.hide = false;
        this.maxValueController.hide = false;
        this.minDateController.hide = true;
        this.maxDateController.hide = true;
        this.dataController.hide = true;
        this.labelController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.typesController.onChange = function (newController) {
            console.log(newController.value);
            if (newController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].select ||
                newController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].checkbox ||
                newController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].radio) {
                _this.minValueController.hide = true;
                _this.maxValueController.hide = true;
                _this.minDateController.hide = true;
                _this.maxDateController.hide = true;
                _this.dataController.hide = false;
            }
            else if (newController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].date ||
                newController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].datetime ||
                newController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].month) {
                _this.minValueController.hide = true;
                _this.maxValueController.hide = true;
                _this.minDateController.hide = false;
                _this.minDateController.type = newController.value;
                _this.maxDateController.hide = false;
                _this.maxDateController.type = newController.value;
                _this.dataController.hide = true;
            }
            else {
                _this.minDateController.hide = true;
                _this.maxDateController.hide = true;
                _this.minValueController.hide = false;
                _this.maxValueController.hide = false;
                _this.dataController.hide = true;
            }
        };
        this.requiredController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.minValueController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.maxValueController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.minDateController.onChange = function (formControl) {
            console.log(formControl.value);
            _this.maxDateController.min = _this.minDateController.value;
        };
        this.maxDateController.onChange = function (formControl) {
            console.log(formControl.value);
            _this.minDateController.max = _this.maxDateController.value;
        };
        this.desktopWidthController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.tabWidthController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.mobileWidthController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.dataController.onChange = function (formControl) {
            console.log(formControl.value);
        };
        this.nameController.onChange = function (formControl) {
            formControl.value = formControl.value.replace(/[^a-zA-Z]/g, '');
            var splitString;
            splitString = formControl.value.split('');
            splitString[0] = splitString[0].toLowerCase();
            formControl.value = splitString.join('');
        };
        this.onOptionChange(this.formControls);
    }
    AddDynamicFormComponent.prototype.getWidthData = function (size) {
        return [
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-1', label: 'Size 01', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-2', label: 'Size 02', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-3', label: 'Size 03', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-4', label: 'Size 04', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-5', label: 'Size 05', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-6', label: 'Size 06', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-7', label: 'Size 07', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-8', label: 'Size 08', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-9', label: 'Size 09', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-10', label: 'Size 10', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-11', label: 'Size 11', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'col-' + size + '-12', label: 'Size 12', isSelected: false }),
        ];
    };
    AddDynamicFormComponent.prototype.closeModel = function (crossClick) {
        this.activeModal.dismiss(crossClick);
    };
    AddDynamicFormComponent.prototype.getTypeData = function () {
        return [
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'text', label: 'Text Input', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'checkbox', label: 'Check Box', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'date', label: 'Date', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'datetime-local', label: 'Date and Time', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'email', label: 'Email', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'file', label: 'File', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'month', label: 'Month', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'number', label: 'Number', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'select', label: 'Drop Down', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'radio', label: 'Radio', isSelected: false }),
            new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]({ id: 'password', label: 'Password', isSelected: false }),
        ];
    };
    AddDynamicFormComponent.prototype.onOptionChange = function ($event) {
    };
    AddDynamicFormComponent.prototype.onFormSave = function ($event) {
        debugger;
        this.formFields.push(this.getNewDynamicFormController());
    };
    AddDynamicFormComponent.prototype.getNewDynamicFormController = function () {
        var newController;
        if (this.typesController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].select ||
            this.typesController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].checkbox ||
            this.typesController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].radio) {
            newController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
                classes: this.mobileWidthController.value + ' ' + this.desktopWidthController.value + ' ' + this.tabWidthController.value,
                value: null,
                types: null,
                required: this.requiredController.value ? true : false,
                name: this.nameController.value,
                max: null,
                min: null,
                label: this.labelController.value,
                type: this.typesController.value,
                data: this.dataController.value
            });
        }
        else if (this.typesController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].date ||
            this.typesController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].datetime ||
            this.typesController.value === _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormControllerType"].month) {
            newController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
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
            });
        }
        else {
            newController = new _shared_modules__WEBPACK_IMPORTED_MODULE_1__["FormController"]({
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
            });
        }
        return newController;
    };
    AddDynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-dynamic-form',
            template: __webpack_require__(/*! ./add-dynamic-form.component.html */ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.html"),
            styles: [__webpack_require__(/*! ./add-dynamic-form.component.scss */ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], AddDynamicFormComponent);
    return AddDynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Medical Laboratory </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"openAddFormModel()\">Add Form</a>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> Sri Hari <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _add_dynamic_form_add_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-dynamic-form/add-dynamic-form.component */ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, modalService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.modalService = modalService;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        setTimeout(this.openAddFormModel.bind(this), 50);
        // this.openAddFormModel();
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.prototype.openAddFormModel = function () {
        this.modalService.open(_add_dynamic_form_add_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["AddDynamicFormComponent"], { size: 'lg', backdrop: false, windowClass: 'dynamic-form-component' });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\" [style.width]=\"iconOnly ? '100px' : '235px'\">\n    <!--<button class=\"btn btn-link\" (click)=\"iconOnly=(!iconOnly)\" style=\"float: right;\">\n        <i class=\"fa fa-expand\" *ngIf=\"iconOnly\" aria-hidden=\"true\" style=\"color: white;\"></i>\n        <i class=\"fa fa-compress\" *ngIf=\"!iconOnly\" aria-hidden=\"true\" style=\"color: white;\"></i>\n    </button>\n    <div style=\"clear: both;\"></div>-->\n    <div class=\"list-group\">\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>  {{ iconOnly ? '' : ('Dashboard' | translate )}}\n        </a>\n        <a routerLink=\"/customers\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-users\"></i> {{ iconOnly ? '' : 'Customers'}}\n        </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-user\"></i>      {{ iconOnly ? '' : 'Vendors'}}          </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-id-badge\"></i>  {{ iconOnly ? '' : 'Employees'}}        </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-th\"></i>        {{ iconOnly ? '' : 'Orders'}}           </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-th-large\"></i>  {{ iconOnly ? '' : 'Products'}}         </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-tags\"></i>      {{ iconOnly ? '' : 'Deals'}}            </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-money\"></i>     {{ iconOnly ? '' : 'Billing'}}          </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-files-o\"></i>   {{ iconOnly ? '' : 'Reports'}}          </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-building\"></i>  {{ iconOnly ? '' : 'Company Details'}}  </a>\n        <a class=\"list-group-item\"> <i class=\"fa fa-list-ol\"></i>   {{ iconOnly ? '' : 'Inventory'}}        </a>\n\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                <span><i class=\"fa fa-plus\"></i>&nbsp;{{ iconOnly ? '' : ('Menu' | translate)}} </span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-bar-chart-o\"></i>    {{ iconOnly ? '' : ( 'Charts' | translate )}}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-table\"></i>    {{ iconOnly ? '' : ( 'Tables' | translate )}}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-edit\"></i>{{ iconOnly ? '' : ( 'Forms' | translate )}}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-desktop\"></i>    {{ iconOnly ? '' : ( 'Bootstrap Element' | translate )}}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-fw fa-wrench\"></i>    {{ iconOnly ? '' : ( 'Bootstrap Grid' | translate ) }}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-th-list\"></i>    {{ iconOnly ? '' : ( 'Component' | translate )}}\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                            <i class=\"fa fa-th-list\"></i>&nbsp;    {{ iconOnly ? '' : 'Blank'}}\n                        </a>\n                    </li>\n\n                </ul>\n            </li>\n        </div>\n\n        <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\n                    <span><i class=\"fa fa-user\"></i>&nbsp; Sri Hari</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<!--\nCustomers\nVendors\nEmployees\nOrders\nProducts\nDeals\nBilling\nReports\nCompany Details\nInventory\n-->\n\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.iconOnly = false;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "iconOnly", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar #sideBar></app-sidebar>\n<section [style.marginLeft]=\"sideBar.iconOnly ? '100px' : '235px'\" class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_add_dynamic_form_add_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-dynamic-form/add-dynamic-form.component */ "./src/app/layout/components/add-dynamic-form/add-dynamic-form.component.ts");
/* harmony import */ var _shared_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/modules */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"].forRoot(),
                _shared_modules__WEBPACK_IMPORTED_MODULE_9__["KskDynamicFormModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__["Ng2SmartTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_add_dynamic_form_add_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__["AddDynamicFormComponent"]],
            entryComponents: [_components_add_dynamic_form_add_dynamic_form_component__WEBPACK_IMPORTED_MODULE_8__["AddDynamicFormComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map