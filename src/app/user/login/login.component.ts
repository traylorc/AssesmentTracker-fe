import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  message: string = "";

  constructor(private syssvc: SystemService, private router: Router, private usersvc: UserService) { }


  login(): void {
    this.syssvc.loggedInUser = null;
    this. usersvc.login(this.email, this.password).subscribe(
      res => {
        console.debug(res)
        this.syssvc.loggedInUser = res;
        this.router.navigateByUrl("/importdata/list")
      },      
      err => {console.error(err);this.message = "Login Failed";}
    );
    

    
  }

  ngOnInit(): void {
  }

}
