import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri:String = 'http://localhost:3000/api';
  heraders   =  new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) { }

  //Clients
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

  getMaxServId(){
    return this.http.get(`${this.uri}/maxservid`);
  }

  getCourierServs(){
    return this.http.get(`${this.uri}/courierservs`);
  }

  getCourierServ(id){
    
    return this.http.get(`${this.uri}/courierserv/${id}`);

  }

  addCourierServ(courierservData){

    return this.http.post<any>(`${this.uri}/addcourierserv`, courierservData);

  }

  editCourierServ(courierservData){

    const obj = {
      id: courierservData.id,
      name: courierservData.name,
      address: courierservData.address,
      contact_no: courierservData.contact_no,
      contact_person: courierservData.contact_person
    };

    return this.http.put<any>(`${this.uri}/editcourierserv`, obj);

  }
}
