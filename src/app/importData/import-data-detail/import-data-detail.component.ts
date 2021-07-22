import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { ImportData } from '../import-data.class';
import { ImportDataService } from '../import-data.service';

@Component({
  selector: 'app-import-data-detail',
  templateUrl: './import-data-detail.component.html',
  styleUrls: ['./import-data-detail.component.css']
})
export class ImportDataDetailComponent implements OnInit {

  iData: ImportData[] = [];
  employeeId: number = 0;
  hiredate: string = '';
  testattempt: number = 0;
  assessment: string = '';

  constructor(private syssvc: SystemService, private idsvc: ImportDataService, private router: Router, private route: ActivatedRoute) { }

  delete(): void {
    
    this.idsvc.remove(this.employeeId).subscribe(
      res =>{console.debug("Success", res);
      this.router.navigateByUrl("/importdata/list");
  },
  err =>{console.error(err);}
    )

  }

  ngOnInit(): void {

    this.employeeId = this.route.snapshot.params.emplid;
    this.hiredate = this.route.snapshot.params.hiredate;
    
    this.idsvc.getByEmployeeId(this.employeeId, this.hiredate).subscribe(
      res =>{console.debug("Success", res);
    this.iData = res;
  },
  err =>{console.error(err);}
    )

  }

}
