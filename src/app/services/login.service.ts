import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  //For login
  loginUser(userDetails){

    return this.http.post<any>('http://opentech4u.co.in:3000/api/login', userDetails);

  }

  isLogin(){
    return !!localStorage.getItem('token');
  }

}
