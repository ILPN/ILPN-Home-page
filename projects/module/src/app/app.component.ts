import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, Observable} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public routingEvent$: Observable<NavigationEnd>;

    constructor(router: Router) {
        this.routingEvent$ = router.events.pipe(filter(e => e instanceof NavigationEnd)) as Observable<NavigationEnd>;
    }

}
