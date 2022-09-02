import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IlpnComponentsModule} from 'ilpn-components';
import {FlexLayoutModule} from '@angular/flex-layout';
import {APP_BASE_HREF, PlatformLocation} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        IlpnComponentsModule,
        FlexLayoutModule,
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
            deps: [PlatformLocation]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
