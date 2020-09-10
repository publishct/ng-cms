import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

// 1. Import the User object (model)
import { User } from '../user';
//Add a route if not logged in
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // 2. Create a new instance of the User object
  user:User = new User();
  // 3. Instantiate an errors array
  error: any;

  // 4. Clear out the contructor login //Add a route if not logged in
  constructor(private userService: UsersService,
    private router: Router) {}

  ngOnInit() {}
  showNav = true;

  // 5. Add a login method
  login(): void{

    this.userService.login(this.user).subscribe(
      (response:any)=>{
        // console.log(response);

        if(response.success == false){
          this.error=true;
        }
        //Add a route if not logged in
        else
          this.router.navigate(['/articles']);
      }
    );
  }

}