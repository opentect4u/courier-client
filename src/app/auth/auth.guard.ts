import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private logingService: LoginService,
    private router: Router
  ){}

  canActivate(): boolean{

    if(this.logingService.isLogin()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
