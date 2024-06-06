import { Routes } from '@angular/router';
import { ContentProjectionContainerComponent } from './content-projection-container/content-projection-container.component';
import { SignalsContainerComponent } from './signals-container/signals-container.component';

export const routes: Routes = [
    {
        path: 'contentProjection',
        component: ContentProjectionContainerComponent
    },
    {
        path: 'signalInputs',
        component: SignalsContainerComponent
    },
    {
        path:'**',
        redirectTo: 'contentProjection',
    }
];
