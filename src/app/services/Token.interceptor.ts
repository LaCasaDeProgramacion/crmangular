import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        // tslint:disable-next-line: max-line-length
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOYWRlcmFiIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwL2NybXByb2plY3Qtd2ViL3Jlc3QvdXNlci9hdXRoZW50aWNhdGUifQ.W4HNecaT9kBaiHvw_yhW4Te84lnP0h--uzvsQ-WEAwn0ncLUSfJ4v2MiK4rvuxTu4Kt3MWq1X1unX74gniD0rA'}`
      }
    });
    return next.handle(request);
  }
}
