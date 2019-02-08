import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(){
    if(this.loginService.isLogin()){
      this.router.navigate(['/dashboard'])
    }
  }

  loginUser(){

    var userDetails = {
      "user_id": this.userId,
      "password": this.password
    };

    this.loginService.loginUser(userDetails).subscribe(data => {

      if(data.token != 'No Data Found'){

        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);

      }
      else{
        console.log('Invalid User');
      }
      
    });

  }
  
 }
