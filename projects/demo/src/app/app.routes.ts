import { Routes } from '@angular/router';
import { ContentProjectionContainerComponent } from './content-projection-container/content-projection-container.component';
import { SignalsContainerComponent } from './signals-input-container/signals-input-container.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contentProjection',
    component: ContentProjectionContainerComponent
  },
  {
    path: 'signalInputs',
    component: SignalsContainerComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
