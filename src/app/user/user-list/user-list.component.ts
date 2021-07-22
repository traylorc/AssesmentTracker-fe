import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private usersvc: UserService, private router : Router) { }

  clickRow(id: number): void {
    console.log(`Clicked the row number ${id}!`);
    this.router.navigateByUrl(`/user/edit/${id}`);
  }
  ngOnInit(): void {

    this.usersvc.list().subscribe(
      res => {console.debug("Success", res);
    this.users = res;
  },
  err =>{console.error(err);}
    )
  }

}
