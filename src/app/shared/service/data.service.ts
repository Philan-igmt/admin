import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_PLATTERS= "http://localhost:5000/platter";
  constructor(private httpClient: HttpClient) { }

  // public createAPlatter(name:string,price:any,description:string,imageUrl:string){
  //   return this.httpClient.post();
  // }

  //Platters
  public getPlatters(){
    return this.httpClient.get(this.REST_API_PLATTERS);
  }

  public deletePlatter(id:any){
    return this.httpClient.delete(`http://localhost:5000/platter/${id}`)
  }
  public addPlatter(name:string,price:any,description:any,image:any){
    return this.httpClient.post<any>('http://localhost:5000/platter', {
      name,
      price,
      description,
      image  
    })
  }
  public updatePlatter(id:any,name:string,price:any,description:any,image:any){
    return this.httpClient.post(`http://localhost:5000/platter/${id}`,{
      name,
      price,
      description,
      image 
    });
  }

  public getOrders(){
    return this.httpClient.get('http://localhost:5000/orders');
  }
  public getEquipments(){
    return this.httpClient.get('http://localhost:5000/api/equipment');
  }

  public deleteEquipment(id:any){
    return this.httpClient.delete(`http://localhost:5000/api/equipment/${id}`);
  }

  //Users
  public getUsers(){
    return this.httpClient.get('http://localhost:5000/users');
  }
  public deleteUser(id:any){
    return this.httpClient.delete(`http://localhost:5000/users/${id}`);
  }
  
  public deleteAppointment(id:any){
    return this.httpClient.delete(`http://localhost:5000/appointment/${id}`);
  }
  public getAppointments(){
    return this.httpClient.get('http://localhost:5000/appointment');
  }
  public events(){
    return this.httpClient.get('http://localhost:5000/events');
  }
  // public getOrders(){
  //   return this.httpClient.get('http://localhost:5000/events');
  // }

}
