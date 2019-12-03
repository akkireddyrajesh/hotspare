import { Injectable } from '@angular/core';
import { AppConfigService } from './app.config.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _appConfig:AppConfigService) {
    console.log(this._appConfig.apiEndPoint)
   };

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url);
    let reqNew: HttpRequest<any>= request.clone({
      
        url: this._appConfig.apiEndPoint + request.url,
        headers: request.headers
        .append("Accept", "application/json")
        // .append("Authorization","Token "+localStorage.getItem('token'))
        .append("Access-Control-Allow-Origin","*")
        .append("Content-Type", "application/json;charset=UTF-8")
    });
   
    return next.handle(reqNew);
  }
}
