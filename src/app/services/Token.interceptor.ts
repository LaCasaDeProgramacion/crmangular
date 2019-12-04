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
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJXYWVsIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwL2NybXByb2plY3Qtd2ViL3Jlc3QvdXNlci9hdXRoZW50aWNhdGUifQ.EuDizz9IP6PIOJeJNB2KdCHQrtrOf36xfO3FWSje6pUZO95akOND179l-ez5YNlkOCg9DN4Z20_ggxgu8cCAdw'}`
      }
    });
    return next.handle(request);
  }
}
