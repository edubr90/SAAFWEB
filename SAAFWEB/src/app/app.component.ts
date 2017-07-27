import { SharedService } from './../services/shared.service';
import { UtilsService } from './../services/utils.service';

import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule
} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'app';

    temaCss: string;
    logoEscola: string;
    joaomini: string;

    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];

    constructor
        (
        private _utilsService: UtilsService,
        private _sharedService: SharedService,
        iconRegistry: MdIconRegistry,
        sanitizer: DomSanitizer
        ) {

        _sharedService.changeEmitted$.subscribe(valor => {
            console.log("O valor mudou para " + valor);
            this.temaCss = valor['temaCss'];
            this.logoEscola = valor['bandeirasemCor'];
        });

        this.joaomini = "../assets/Content/Imagens/joao_mini.jpg";


    }







}

