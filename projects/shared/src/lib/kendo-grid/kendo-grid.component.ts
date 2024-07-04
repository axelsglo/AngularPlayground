import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DataStateChangeEvent, GridDataResult, GridModule, } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
// import { encodeBase64, saveAs } from '@progress/kendo-file-saver';
// import { json2csv } from 'json-2-csv';
import { DataService } from '../data.service';

@Component({
  selector: 'lib-kendo-grid',
  standalone: true,
  imports: [GridModule, JsonPipe],
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
  public columns: string[] = ['customerID', 'contactName', 'address', 'companyName', 'city'];
  public hiddenColumns: string[] = ['addres', 'companyName', 'city'];

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

  public exportToCSV() {
    this.loading = true;
    this.dataService.fetch({ ...this.state, take: undefined, skip: undefined }).subscribe((response: GridDataResult) => {
      console.log(response.data);
      // const csv = json2csv(response.data)
      // const dataURI = 'data:text/plain;base64,' + encodeBase64(csv);
      // saveAs(dataURI, 'gridData.csv');
      // this.loading = false;
    });
  }
}
