import { Component, model } from '@angular/core';

@Component({
  selector: 'lib-model-signal',
  standalone: true,
  imports: [],
  templateUrl: './model-signal.component.html',
  styleUrl: './model-signal.component.scss'
})
export class ModelSignalComponent {
  flag = model(false);
}
