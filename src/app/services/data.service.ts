import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri:String = 'http://courier.synergicportal.in/api';
  heraders   =  new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) { }

  //For Items

  getItems(){
    
    return this.http.get(`${this.uri}/items`);

  }

  getItem(id){
    
    return this.http.get(`${this.uri}/item/${id}`);

  }

  addItem(itemData){
    
    const obj = {
      name: itemData.name
    };

    return this.http.post<any>(`${this.uri}/additem`, obj);

  }

  editItem(itemData){

    const obj = {
      id: itemData.id,
      name: itemData.name
    };

    return this.http.put<any>(`${this.uri}/edititem`, obj);

  }

  //For Courier Companies

  getCourierComps(){
    return this.http.get(`${this.uri}/couriercomps`);
  }

  getCourierComp(id){
    
    return this.http.get(`${this.uri}/couriercomp/${id}`);

  }

  addCourierComp(couriercompData){
    
    const obj = {
      name: couriercompData.name,
      address: couriercompData.address,
      contact_no: couriercompData.contact_no,
      contact_person: couriercompData.contact_person
    }

    return this.http.post<any>(`${this.uri}/addcouriercomp`, obj);

  }

  editCourierComp(couriercompData){

    const obj = {
      id: couriercompData.id,
      name: couriercompData.name,
      address: couriercompData.address,
      contact_no: couriercompData.contact_no,
      contact_person: couriercompData.contact_person
    };

    return this.http.put<any>(`${this.uri}/editcouriercomp`, obj);

  }

  //For Courier Companies

  getMaxServId(date: string){

    return this.http.get(`${this.uri}/maxservid/${date}`);
  
  }

  getCourierServs(year, month){
    return this.http.get(`${this.uri}/courierservs/${year}/${month}`);
  }

  getCourierServ(id, date){
    
    return this.http.get(`${this.uri}/courierserv/${id}/${date}`);

  }

  addCourierServ(courierservData){

    return this.http.post<any>(`${this.uri}/addcourierserv`, courierservData);

  }

  editCourierServ(courierservData){

    return this.http.put<any>(`${this.uri}/editcourierserv`, courierservData);

  }

  deleteCourierServ(id){
    
    return this.http.delete(`${this.uri}/deletecourierserv/${id}`);

  }
}
