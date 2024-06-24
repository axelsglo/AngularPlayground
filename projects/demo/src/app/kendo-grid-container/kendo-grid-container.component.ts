import { Component } from '@angular/core';
import { KendoGridComponent } from '@shared/lib/kendo-grid/kendo-grid.component';

@Component({
  selector: 'app-kendo-grid-container',
  standalone: true,
  imports: [KendoGridComponent],
  templateUrl: './kendo-grid-container.component.html',
  styleUrl: './kendo-grid-container.component.scss'
})
export class KendoGridContainerComponent {

}
