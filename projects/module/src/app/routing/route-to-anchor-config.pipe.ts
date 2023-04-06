import {Pipe, PipeTransform} from '@angular/core';
import {NavigationEnd} from '@angular/router';
import {AnchorType, HeadingAnchorConfig} from 'ilpn-components';

@Pipe({
    name: 'routeToAnchorConfig'
})
export class RouteToAnchorConfigPipe implements PipeTransform {

    transform(routeChanged: NavigationEnd | null, ...args: unknown[]): HeadingAnchorConfig {
        if (!!routeChanged && routeChanged.url === '/') {
            return {
                type: AnchorType.HREF
            };
        } else {
            return {
                type: AnchorType.ROUTER,
                link: '/'
            }
        }
    }

}
