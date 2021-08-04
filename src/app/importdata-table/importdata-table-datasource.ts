import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ImportDataService } from '../import-Data/import-data.service';
import { ImportData } from '../import-Data/importdata.class';

// TODO: Replace this with your own data model type
export interface ImportdataTableItem {

  employeeId: number;
  employeeLastName: string;
  employeeFirstName: string;
  hireDate: string;
  position: string; 
  division: string;
  divisionParent: string; 
  managerLastName: string; 
  managerFirstName: string; 
  testAttempt: number;
  attemptDate: string;
  score: number;
  assessment: string;
  duration: number; 
}

// TODO: replace this with real data from your application
const importData: ImportData[] = [];


/**
 * Data source for the ImportdataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ImportdataTableDataSource extends DataSource<ImportdataTableItem> {
  data: ImportdataTableItem[] = importData;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private importdatasrvc : ImportDataService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ImportData[]> {
    return this.importdatasrvc.list();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ImportdataTableItem[]): ImportdataTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ImportdataTableItem[]): ImportdataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'employeeLastName': return compare(a.employeeLastName, b.employeeLastName, isAsc);
        case 'employeeId': return compare(+a.employeeId, +b.employeeId, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
