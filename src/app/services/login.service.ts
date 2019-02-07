import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  key: any;

  constructor(private http: Http) { }

  //For login
  loginUser(userDetails){

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/login', userDetails, {headers: headers})
           .pipe(map((res) => res.json()));
  }

  isLogin(){
    return !!localStorage.getItem('token');
  }

}
