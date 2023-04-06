import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContentComponent} from './home-content/home-content.component';
import {ArchiveContentComponent} from './archive-content/archive-content.component';
import {ExternalRedirectHookGuard} from './routing/external-redirect-hook.guard';


const routes: Routes = [
    {path: 'archive', component: ArchiveContentComponent},
    {path: '', component: HomeContentComponent},
    {path: '**', canActivate: [ExternalRedirectHookGuard], redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
