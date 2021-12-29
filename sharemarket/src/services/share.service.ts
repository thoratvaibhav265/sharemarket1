import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Share } from 'src/classes/share';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareService {



  public url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  addShare(adminId:number,share: Share): Observable<Share> {

    return <Observable<Share>>(
      this.httpClient.post(this.url + "admin/"+adminId+ "/share", share)
    );
  }

  getShareByName(sharename: string): Observable<Share>{

    return <Observable<Share>>this.httpClient.get(this.url+"share/get?sharename"+sharename);
  }
  getAllshares():Observable<Share[]>
  {
    return <Observable<Share[]>>this.httpClient.get(this.url+'admin/shares');
  }

  getShareById(shareId: number): Observable<Share>{
    return <Observable<Share>>this.httpClient.get(this.url+"admin/share/"+shareId);
  }

  updateShareById(id:number,share:Share):Observable<Share>{
    return <Observable<Share>>(
      this.httpClient.patch(this.url+'admin/update/'+id,share)
    );
  }

  deleteShareById(id:number):Observable<Share>
  {
    return <Observable<Share>>(
      this.httpClient.delete(this.url+'admin/delete/'+id)
    );
  }
  buyShares(id:number,share:Share):Observable<Share>
  {
    return <Observable<Share>>(
           this.httpClient.put(this.url+'trader/buy'+id,share)
    );
  }
  sellShares(id:number,share:Share):Observable<Share>
  {
    return <Observable<Share>>(
           this.httpClient.put(this.url+'trader/sell'+id,share)
    );
  }

}
