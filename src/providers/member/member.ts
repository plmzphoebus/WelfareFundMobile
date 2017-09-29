import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
/*
  Generated class for the MemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberProvider {

  constructor(public http: Http) {
    console.log('Hello MemberProvider Provider');
  }

  login(citizenId: string){
    return this.http.get("https://bf8d2adb.ngrok.io/WelfareFundMVC/login/"+citizenId+".do")
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server error.");
    
  }

  private logResponse(res: Response){
      console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }

}
