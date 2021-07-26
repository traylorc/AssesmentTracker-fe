import { Component, OnInit } from '@angular/core';
import { ImportData } from '../importdata.class';
import { ImportDataService } from '../import-data.service';

@Component({
  selector: 'app-import-data-list',
  templateUrl: './import-data-list.component.html',
  styleUrls: ['./import-data-list.component.css']
})
export class ImportDataListComponent implements OnInit {

  sortColumn: string = 'employeeId';
  sortAsc: boolean = true;

  sortFn(column: string): void{
    if(column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  searchCrit: string = '';

  iData: ImportData[] = [];

  constructor(private idsvc: ImportDataService) { }

refresh():void 
{
  console.log("Refresh ran!")
  this.idsvc.list().subscribe(
    res => {console.debug("Success", res);
  this.iData = res;
},
err =>{console.error(err);}
  );
}

  ngOnInit(): void {

  this.refresh();
  }
}
