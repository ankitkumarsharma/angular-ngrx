import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LoaderService } from "../services/loader/loader.service";

@Injectable({
  providedIn:'root'
})
export class LoaderInterceptor implements HttpInterceptor{
  sessionId = "12345XC"; // for time it is static, when will develop, will change it to dynamic
  constructor(private _loaderService: LoaderService){}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(tap((httpEvent: HttpEvent<any>)=>{
      if(httpEvent instanceof HttpResponse) {
        this.onEndLoader();
      }
    },
    (err:any)=> {
      this.onEndLoader();
    }
    ))
  }
  // for end the loader
  private onEndLoader(): void{
    this.hideLoader();
  }
  // for show the loader
  private showLoader(): void{
    this._loaderService.show();
  }
  // for hide the loader
  private hideLoader(): void{
    this._loaderService.hide();
  }
}
