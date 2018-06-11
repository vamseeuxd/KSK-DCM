import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddDynamicFormComponent} from '../../../db/components/form/add-dynamic-form/add-dynamic-form.component';
import {AddModulesFormComponent} from '../../../db/components/module/add-modules-form/add-modules-form.component';
import {AddFormControllerComponent} from '../../../db/components/controller/add-form-controller/add-form-controller.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass = 'push-right';

    constructor(private translate: TranslateService, public router: Router, private modalService: NgbModal) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        // setTimeout(this.openAddFormModel.bind(this), 50);
        // this.openAddFormModel();
        // this.openAddFormControllerModel();
        // this.openAddFormModel();
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    openAddFormModel() {
        this.modalService.open(AddDynamicFormComponent, {size: 'lg', backdrop: false, windowClass: 'dynamic-form-component'});
    }

    openAddModuleModel() {
        this.modalService.open(AddModulesFormComponent, {size: 'lg', backdrop: false, windowClass: 'dynamic-form-component'});
    }

    openAddFormControllerModel() {
        this.modalService.open(AddFormControllerComponent, {size: 'lg', backdrop: false, windowClass: 'dynamic-form-component'});
    }

}
