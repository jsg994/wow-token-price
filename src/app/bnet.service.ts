import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class BnetService {
  mountsResponse: any;
  token: any;
  allMounts: any;
  lastUpdated: any;
  data: any;
  tokenPrice: any;
  constructor(private http: HttpClient) {
    this.authorizeApp()
  }

  getToken(){
    return this.token;
  }

  uri = "http://localhost:4200/";

  //Gets token for BNET - Application Level
 async authorizeApp() {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data",
        Authentication:
          "Basic " + environment.BNET_ID + ":" + environment.BNET_SECRET
      })
    };
    let params = new HttpParams()
      .set("grant_type", "client_credentials")
      .set("client_id", environment.BNET_ID)
      .set("client_secret", environment.BNET_SECRET);
  return this.http
      .get(environment.TOKEN_API + params, httpOptions).subscribe(res => {
        this.token = res['access_token']
        console.log(this.token, 'token')
      })
  }

  //Hit BNET Api - returns token price JSON
  callTokenPrice() : Observable<any[]> {
    let tokenParams: any = new HttpParams()
      .set("locale", "en_US")
      .set("access_token", this.token);
   return this.http
      .get<any>(environment.PRICE_API + tokenParams).pipe(
        tap(data => console.log('data')),
      )
  }

  // callTokenPrice() {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //       "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  //     })
  //   };
  //   let tokenParams: any = new HttpParams()
  //     .set("locale", "en_US")
  //     .set("access_token", this.token);
  //   this.http
  //     .get(environment.PRICE_API + tokenParams, httpOptions).subscribe(res => {
  //       console.log(res)
  //       // this.tokenPrice = res['mounts']
  //     })
  // }
}