import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  id: number = 0;

  constructor(private syssvc: SystemService, private usersvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.usersvc.getByPk(this.id).subscribe(
      res =>{console.debug("Success", res);
    this.user = res;
  },
  err =>{console.error(err);}
    )
  }

}
