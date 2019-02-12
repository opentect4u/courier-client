import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri:String = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getClients(){
    
    return this.http.get(`${this.uri}/clients`);

  }

  getClient(id){
    
    return this.http.get(`${this.uri}/client/${id}`);

  }

  addClient(clientData){
    
    const obj = {
      name: clientData.name,
      address: clientData.address,
      location: clientData.location,
      pin: clientData.pin
    };

    return this.http.post<any>(`${this.uri}/addclient`, obj);

  }

  editClient(clientData){

    const obj = {
      id: clientData.id,
      name: clientData.name,
      address: clientData.address,
      location: clientData.location,
      pin: clientData.pin
    };

    return this.http.put<any>(`${this.uri}/editclient`, obj);

  }
}
