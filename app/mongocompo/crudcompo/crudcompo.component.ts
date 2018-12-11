import { Component, OnInit } from '@angular/core';
import {MongocrudService} from '../../mongoservice/mongocrud.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-crudcompo',
  templateUrl: './crudcompo.component.html',
  styleUrls: ['./crudcompo.component.css']
})
export class CrudcompoComponent implements OnInit {
  private fetchdata:any;
  private insertstatus:any;
  private deletestatus:any;
  private updatestatus:any;
  constructor(private _service:MongocrudService) { }

  ngOnInit() {
    this._service.fetchdata().subscribe((res)=>{return this.fetchdata=res},
                                        (err:HttpErrorResponse)=>{
                                          if(err.error instanceof Error){
                                            console.log("client side error");
                                          }else{
                                            console.log("server side error")
                                          }
                                        })
                                        
  }
  public insert(obj:any):any{
    this._service.insertdata(obj).subscribe((res)=>{return this.insertstatus=res},
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("client side error");
      }else{
        console.log("server side error")
      }
    })
  }
  public update(obj:any):any{
    this._service.updatedata(obj).subscribe((res)=>{return this.updatestatus=res},
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("client side error");
      }else{
        console.log("server side error")
      }
    })
  }
  public delete(obj:any):any{
    this._service.deletedata(obj).subscribe((res)=>{return this.deletestatus=res},
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("client side error");
      }else{
        console.log("server side error")
      }
    })
  }
}
/*
export class CrudcompoComponent implements OnInit{
  private products:any;
  private insertStatus:any;
  private updateStatus:any;
  private deleteStatus:any;
  constructor(private _service:MongocrudService){
  }
  ngOnInit(){
      this._service.fetchdata().subscribe(res=>{
          this.products = res;
      },(err:HttpErrorResponse)=>{
          if(err.error instanceof Error){
              console.log("Client Side Error");
          }else{
              console.log("Server Side Error");
          }
      });
  }
  public insertData(record:any):any{
      this._service.insertdata(record).subscribe(res=>{
          this.insertStatus=res;
      },(err:HttpErrorResponse)=>{
          if(err.error instanceof Error){
              console.log("Client Side Error !");
          }else{
              console.log("Server Side Error !");
          }
      });
  };
  public updateData(record:any):any{
      this._service.updatedata(record).subscribe(res=>{
          this.updateStatus=res;
      },(err:HttpErrorResponse)=>{
          if(err.error instanceof Error){
              console.log("Client Side Error !");
          }else{
              console.log("Server Side Error !");
          }
      });
  };
  public deleteData(record:any):any{
      this._service.deletedata(record).subscribe(res=>{
          this.deleteStatus=res;
      },(err:HttpErrorResponse)=>{
          if(err.error instanceof Error){
              console.log("Client Side Error !");
          }else{
              console.log("Server Side Error !");
          }
      });
  };
}
*/
