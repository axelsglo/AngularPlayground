import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WidgetFooterComponent } from './widget-footer/widget-footer.component';

@Component({
  selector: 'lib-widget',
  standalone: true,
  imports: [CommonModule, WidgetFooterComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {

}
