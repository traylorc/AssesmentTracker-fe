import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ImportDataService } from '../import-Data/import-data.service';
import { ImportdataTableDataSource, ImportdataTableItem } from './importdata-table-datasource';

@Component({
  selector: 'app-importdata-table',
  templateUrl: './importdata-table.component.html',
  styleUrls: ['./importdata-table.component.css']
})
export class ImportdataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ImportdataTableItem>;
  dataSource: ImportdataTableDataSource;

  searchCrit: string = '';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['employeeId',
                      'employeeFirstName',
                      'employeeLastName',
                      'hireDate',
                      'division',
                      'divisionParent',
                      'managerFirstName',
                      'managerLastName',
                      'testAttempt',
                      'attemptDate',
                      'score',
                      'assessment'
                      ];

  constructor(public importdatasrvc : ImportDataService ) {
    this.dataSource = new ImportdataTableDataSource(importdatasrvc);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
