import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:23844/api/users"

  constructor(private http: HttpClient) { }


  list(): Observable<User[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
  getByPk(id: number): Observable<User>
  {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User>
  {
    return this.http.post(`${this.baseurl}`,user) as Observable<User>;
  }
  edit(user: User): Observable<User>
  {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
  }
  remove(id:number): Observable<User>
  {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<User>;
  }
  login(email: string, password: string): Observable<User>
   {
      return this.http.get(`${this.baseurl}/${email}/${password}`) as Observable<User>;
   }
}
