import {Component} from '@angular/core';
import {FD_PARTIAL_ORDER, FD_PETRI_NET, FD_BPMN, FD_TRANSITION_SYSTEM, FD_LOG} from 'ilpn-components';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {

    readonly FD_PN = FD_PETRI_NET;
    readonly FD_BPMN = FD_BPMN;
    readonly FD_PO = FD_PARTIAL_ORDER;
    readonly FD_TS = FD_TRANSITION_SYSTEM;
    readonly FD_LOG = FD_LOG;

}
