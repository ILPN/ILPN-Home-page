import {Component} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {FD_PETRI_NET} from 'ilpn-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        {provide: APP_BASE_HREF, useValue: ''}
    ]
})
export class AppComponent {

    readonly FD_PN = FD_PETRI_NET;

}
