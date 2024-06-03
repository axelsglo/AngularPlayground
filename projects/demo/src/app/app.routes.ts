import { Routes } from '@angular/router';
import { ContentProjectionContainerComponent } from './content-projection-container/content-projection-container.component';

export const routes: Routes = [
    {
        path: 'contentProjection',
        component: ContentProjectionContainerComponent
    },
    {
        path:'**',
        redirectTo: 'contentProjection',
    }
];
