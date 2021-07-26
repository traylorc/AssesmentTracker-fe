import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { ImportData } from '../importdata.class';
import { ImportDataService } from '../import-data.service';

@Component({
  selector: 'app-import-data-edit',
  templateUrl: './import-data-edit.component.html',
  styleUrls: ['./import-data-edit.component.css']
})
export class ImportDataEditComponent implements OnInit {

  iData: ImportData = new ImportData();
  id: number = 0;

  constructor(private syssvc: SystemService, private idsvc: ImportDataService, private router: Router, private route: ActivatedRoute) { }

  update(): void {

    this.idsvc.edit(this.iData).subscribe(
      res =>{console.debug("Success", res);
      this.router.navigateByUrl("/importdata/list");
  },
  err =>{console.error(err);}
    )}

  ngOnInit(): void {
  }

}
