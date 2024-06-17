import { Component } from '@angular/core';
import { ModelSignalComponent } from '@shared/lib/model-signal/model-signal.component';

@Component({
  selector: 'app-model-signals-container',
  standalone: true,
  imports: [ModelSignalComponent],
  templateUrl: './model-signals-container.component.html',
  styleUrl: './model-signals-container.component.scss'
})
export class ModelSignalsContainerComponent {
  flag = false;

  flagChange() {
    console.log('flag changed');
  }
}
