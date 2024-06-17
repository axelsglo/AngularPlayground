import { Routes } from '@angular/router';
import { ContentProjectionContainerComponent } from './content-projection-container/content-projection-container.component';
import { SignalInputsContainerComponent } from './signal-inputs-container/signal-inputs-container.component';
import { HomeComponent } from './home/home.component';
import { ModelSignalsContainerComponent } from './model-signals-container/model-signals-container.component';

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
    component: SignalInputsContainerComponent
  },
  {
    path: 'modelSignals',
    component: ModelSignalsContainerComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
