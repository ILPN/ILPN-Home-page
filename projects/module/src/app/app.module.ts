import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IlpnComponentsModule} from 'ilpn-components';
import {FlexLayoutModule} from '@angular/flex-layout';
import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {HomeContentComponent} from './home-content/home-content.component';
import {ArchiveContentComponent} from './archive-content/archive-content.component';
import { RouteToAnchorConfigPipe } from './routing/route-to-anchor-config.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeContentComponent,
        ArchiveContentComponent,
        RouteToAnchorConfigPipe
    ],
    imports: [
        AppRoutingModule,
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
