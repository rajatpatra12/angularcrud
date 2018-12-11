import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class MongocrudService {
 // private render=new BehaviorSubject<any>(this.fetchdata())
 // cast=this.render.asObservable();
  constructor(private _http:HttpClient) { }
  public  fetchdata():any{
    return this._http.get("http://localhost:8080/fetch");
  }
  public insertdata(obj:any):any{
    return this._http.post("http://localhost:8080/insert",obj);
  };
  public deletedata(obj:any):any{
    return this._http.post("http://localhost:8080/delete",obj);
  }
  public updatedata(obj:any):any{
    return this._http.post("http://localhost:8080/update",obj);
  };
}
