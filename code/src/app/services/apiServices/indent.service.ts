import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndentService {

  constructor(private _http:HttpService) { }

  
  getAllIndents(postBody){
    const url = 'api/imgt/fethInvMgmDts';
    console.log(url);
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }

  createIndent(postBody){
    const url = 'api/imgt/saveIndentDts';
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }

  getLastThirtyDays(){
    const url ='api/imgt/lastThirtyDays';
    return this._http.get<any>(url)
    .pipe(catchError(this._http.handleHttpError));
  }

  getOldIndents() {
    const url ='api/imgt/oldArchives';
    return this._http.get<any>(url)
    .pipe(catchError(this._http.handleHttpError));
  }

  getDateWise(data){
    const url = 'api/imgt/dateWiseStmts';
    return this._http.post<any>(url,data)
    .pipe(catchError(this._http.handleHttpError));
  }
}
