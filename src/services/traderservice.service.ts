import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trader } from 'src/classes/trader';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraderserviceService {

  public url = environment.baseUrl;


  constructor(private httpClient: HttpClient) { }

  public loginTrader(username: any, password: any): Observable<Trader> {
    return <Observable<Trader>>(this.httpClient.get(this.url + "trader/login/" + username + "/" + password)
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }))
    )
  }

  public addTrader(trader:Trader):Observable<Trader>
  {
           return <Observable<Trader>>this.httpClient.post(this.url+'trader/register',trader);
  }

  public updateTrader(id:number,trader:Trader):Observable<Trader>{
    return <Observable<Trader>>(
      this.httpClient.patch(this.url+'/traders/'+id,trader)
    );
  }

  public getAllTraders():Observable<Trader[]>{
    return <Observable<Trader[]>>this.httpClient.get(this.url+'admin/traders');
  }

  public getTraderById(id:number):Observable<Trader>{
    return <Observable<Trader>>this.httpClient.get(this.url+'traders/'+id);

  }

  public deleteTraderByid(id:number):Observable<Trader>
  {
    return <Observable<Trader>>this.httpClient.delete(this.url+'admins'+id);
  }

  public getTraderByEmail(email:string):Observable<Trader>{
    return <Observable<Trader>>this.httpClient.get(this.url+'traders/get?emailId'+email);

  }
  public checkEmailExist(email:string){
    return this.httpClient.get(this.url+'trader/'+email);
  }

}








