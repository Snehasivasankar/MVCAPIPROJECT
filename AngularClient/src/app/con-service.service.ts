import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

export interface WebApiTab{
  Id:number;
  Name:string;
  Age:number;
  mark:number;
}
const endpoint='http://localhost:50196/api/API/';
 

@Injectable({
  providedIn: 'root'
})

export class ConServiceService {

  constructor(private http:HttpClient) { }
  addWebApiTab(student:any):Observable<any>{
    return this.http.post(endpoint+'postwebapitab',student);
  }
  getAllWebApiTabs():Observable<WebApiTab[]>{
    return this.http.get<WebApiTab[]>(endpoint + 'getwebapitabs');
  }
  deleteWebApiTab(id:number):Observable<any>{
    return this.http.delete<WebApiTab>(endpoint+'deletewebapitab/'+id);
  }
  getWebApiTab(id:number):Observable<any>{
    return this.http.get<WebApiTab>(endpoint+'getwebapitab/'+id);
  }
  updateWebApiTab(id:number,student:WebApiTab):Observable<any>{
    return this.http.put<WebApiTab>(endpoint + 'putwebapitab/'+id,student);
  }
}
