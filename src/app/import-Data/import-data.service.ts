import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImportData } from './importdata.class';

@Injectable({
  providedIn: 'root'
})
export class ImportDataService {

  baseurl: string = "http://localhost:23844/api/importdatas"

  constructor(private http: HttpClient) { }

  list(): Observable<ImportData[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<ImportData[]>;
  }
  getByPk(employeeId: number, hireDate: string, testAttempt: number, assessment: string): Observable<ImportData>
  {
    return this.http.get(`${this.baseurl}/${employeeId}/${hireDate}/${testAttempt}/${assessment}`) as Observable<ImportData>;
  }
  create(iData: ImportData): Observable<ImportData>
  {
    return this.http.post(`${this.baseurl}`, iData) as Observable<ImportData>;
  }
  edit(iData: ImportData): Observable<ImportData>
  {
    return this.http.put(`${this.baseurl}/${iData.employeeId}`, iData) as Observable<any>;
  }
  remove(employeeId:number): Observable<ImportData>
  {
    return this.http.delete(`${this.baseurl}/${employeeId}`) as Observable<ImportData>;
  }
  getByEmployeeId(employeeId: number, hiredate: string): Observable<ImportData[]>
    {
      return this.http.get(`${this.baseurl}/${employeeId}/${hiredate}`) as Observable<ImportData[]>
    }
}
