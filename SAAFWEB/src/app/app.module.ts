
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsService } from './../services/utils.service';
import { SharedService } from './../services/shared.service';

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

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
     // Material
      MdAutocompleteModule,
      MdButtonModule,
      MdButtonToggleModule,
      MdCardModule,
      MdCheckboxModule,
      MdChipsModule,
      MdDatepickerModule,
      MdDialogModule,
      MdExpansionModule,
      MdGridListModule,
      MdIconModule,
      MdInputModule,
      MdListModule,
      MdMenuModule,
      MdCoreModule,
      MdProgressBarModule,
      MdProgressSpinnerModule,
      MdRadioModule,
      MdRippleModule,
      MdSelectModule,
      MdSidenavModule,
      MdSlideToggleModule,
      MdSliderModule,
      MdSnackBarModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule,
      MdNativeDateModule,

      // Material (future CDK)
      OverlayModule
  ],
  providers: [
      UtilsService,
      SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
