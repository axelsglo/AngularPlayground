import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WidgetComponent } from '@shared/lib/widget/widget.component';

@Component({
  selector: 'app-content-projection-container',
  standalone: true,
  imports: [WidgetComponent, RouterLink],
  templateUrl: './content-projection-container.component.html',
  styleUrl: './content-projection-container.component.scss'
})
export class ContentProjectionContainerComponent {

}
