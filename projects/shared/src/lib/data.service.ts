import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { GridDataResult } from "@progress/kendo-angular-grid";
import {
  State,
  toDataSourceRequestString,
  translateDataSourceResultGroups
} from "@progress/kendo-data-query";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  private BASE_URL =
    "https://demos.telerik.com/aspnet-core/service/api/serveroperations";

  public fetch(state: State): Observable<GridDataResult> {
    const queryStr = `${toDataSourceRequestString(state)}`;
    const hasGroups = state.group && state.group.length;

    return this.http
      .post<GridDataResult>(`${this.BASE_URL}`, queryStr, {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
      .pipe(
        // Process the response.
        map<GridDataResult, GridDataResult>(({ data, total }): GridDataResult => {
          return {
            data: hasGroups
              ? translateDataSourceResultGroups(data)
              : data,
            total: total
          };
        })
      );
  }
}