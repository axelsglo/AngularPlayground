import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-widget-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-footer.component.html',
  styleUrl: './widget-footer.component.scss'
})
export class WidgetFooterComponent implements OnInit{
  ngOnInit(): void {
    console.log('WidgetFooterComponent init');
  }
}
