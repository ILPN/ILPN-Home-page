import {Component} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {FD_PARTIAL_ORDER, FD_PETRI_NET, FD_BPMN, FD_TRANSITION_SYSTEM, FD_LOG} from 'ilpn-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/ilovepetrinets/'}
    ]
})
export class AppComponent {

    readonly FD_PN = FD_PETRI_NET;
    readonly FD_BPMN = FD_BPMN;
    readonly FD_PO = FD_PARTIAL_ORDER;
    readonly FD_TS = FD_TRANSITION_SYSTEM;
    readonly FD_LOG = FD_LOG;

}
