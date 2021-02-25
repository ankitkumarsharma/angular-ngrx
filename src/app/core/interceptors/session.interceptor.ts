import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SessionInterceptor implements HttpInterceptor{
  sessionId = "12345XC"; // for time it is static, when will develop, will change it to dynamic
  constructor(){}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest);
  }
  // add session id
  addSession(request: HttpRequest<any>){
    const session = {
      sessionData: {
        sessionId: this.sessionId
      }
    };
    if(this.sessionId !== ""){
      return request.clone({
        body: {...request.body, ...session}
      })
    }
    return request;
  }
  // add header
  addHeaders(request: HttpRequest<any>){
    const reqHeaders = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Accept','application/json')
      .set('Access-Control-Allow-Origin','*');
    return request.clone({
      headers: reqHeaders
    })
  }
}
