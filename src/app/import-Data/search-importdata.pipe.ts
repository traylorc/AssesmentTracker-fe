import { Pipe, PipeTransform } from '@angular/core';
import { ImportData } from './importdata.class';

@Pipe({
  name: 'searchImportdata'
})
export class SearchImportdataPipe implements PipeTransform {

  transform(iData: ImportData[], searchCrit: string): ImportData[] {

    if(iData == null || searchCrit.length ===0){
      return iData;
    }

    let search = searchCrit.toLocaleLowerCase();
    let selectediData: ImportData[] = [];

    for(let i of iData){
      if(
        i.employeeId.toString().includes(search)
        || i.employeeFirstName.toLowerCase().includes(search)
         || i.employeeLastName.toLowerCase().includes(search)
          || i.hireDate.toString().toLowerCase().includes(search)
           || i.division.toLowerCase().includes(search)
            || i.divisionParent.toLowerCase().includes(search)
             || i.managerFirstName.toLowerCase().includes(search)
              || i.managerLastName.toLowerCase().includes(search)
               || i.testAttempt.toString().toLowerCase().includes(search)
                || i.attemptDate.toString().toLowerCase().includes(search)
                 || i.score.toString().toLowerCase().includes(search)
                  || i.assessment.toLowerCase().includes(search)
      )
      {selectediData.push(i);}
    }
    return selectediData;
  }

}
