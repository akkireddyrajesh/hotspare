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
    const url = 'imgt/fethInvMgmDts';
    console.log(url);
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }

  createIndent(postBody){
    const url = 'imgt/saveIndentDts';
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }
}
