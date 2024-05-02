
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración de locale
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCa from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';


registerLocaleData(localeEsHN);
registerLocaleData(localeFrCa);

@NgModule({
    declarations: [
        AppComponent,
    ],
    exports: [],
    providers: [
      { provide: LOCALE_ID, useValue: 'Es-HN'}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,

    ]
})
export class AppModule { }
