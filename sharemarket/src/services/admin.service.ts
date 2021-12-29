import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from 'src/classes/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url = environment.baseUrl;


  constructor(private httpClient: HttpClient) { }

  public loginAdmin(username: any, password: any): Observable<Admin> {
    return <Observable<Admin>>(this.httpClient.get(this.url + "admin/login/" + username + "/" + password)
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }))
    )
  }
  public addTrader(trader:Admin):Observable<Admin>
  {
           return <Observable<Admin>>this.httpClient.post(this.url+'/trader',trader);
  }

  public updateTrader(id:number,trader:Admin):Observable<Admin>{
    return <Observable<Admin>>(
      this.httpClient.patch(this.url+'/traders/'+id,trader)
    );
  }

  public getAllTraders():Observable<Admin[]>{
    return <Observable<Admin[]>>this.httpClient.get(this.url+'/admin/traders');
  }

  public getTraderById(id:number):Observable<Admin>{
    return <Observable<Admin>>this.httpClient.get(this.url+'/traders/'+id);

  }
}
