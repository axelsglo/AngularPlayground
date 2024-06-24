import { Component } from '@angular/core';
import { DataStateChangeEvent, GridDataResult, GridModule, } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { DataService } from '../data.service';

@Component({
  selector: 'lib-kendo-grid',
  standalone: true,
  imports: [GridModule],
  templateUrl: './kendo-grid.component.html',
  styleUrl: './kendo-grid.component.scss'
})
export class KendoGridComponent {
  public state: State = {
    skip: 0,
    take: 100,
    group: [],
    filter: { filters: [], logic: "and" },
    sort: [],
  };
  public loading = false;
  public data: GridDataResult = { data: [], total: 0 };

  constructor(private dataService: DataService) {
    this.sendRequest(this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.sendRequest(state);
  }

  public sendRequest(state: State): void {
    this.loading = true;
    this.dataService.fetch(state).subscribe((response: GridDataResult) => {
      this.data = response;
      this.loading = false;
    });
  }
}
