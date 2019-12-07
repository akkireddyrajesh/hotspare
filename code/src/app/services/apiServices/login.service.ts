import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpService) { }

  /**
   * Login Post call
   * Post Body
   * {
   * "userId":"value",
   * "paswword":"value"
      }
   */
  login(postBody){
    const url = 'api/user/login';
    return this._http.post<any>(url,postBody)
    .pipe(catchError(this._http.handleHttpError));
  }
}
