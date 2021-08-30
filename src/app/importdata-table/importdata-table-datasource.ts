import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable} from 'rxjs';
import { ImportDataService } from '../import-Data/import-data.service';
import { ImportData } from '../import-Data/importdata.class';

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

const importData: ImportData[] = [];

/*Data source for the ImportdataTable view.*/
export class ImportdataTableDataSource extends DataSource<ImportdataTableItem> {
  data: ImportdataTableItem[] = importData;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private importdatasrvc : ImportDataService) {
    super();
  }

  /*Connect this data source to the table.*/
  connect(): Observable<ImportData[]> {
    return this.importdatasrvc.list();
  }

  disconnect(): void {}

  public getPagedData(data: ImportdataTableItem[]): ImportdataTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  public getSortedData(data: ImportdataTableItem[]): ImportdataTableItem[] {
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

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
