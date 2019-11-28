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
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJaaWVkeml6b3UiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvY3JtcHJvamVjdC13ZWIvcmVzdC91c2VyL2F1dGhlbnRpY2F0ZSJ9.fQi_HO8WU1t2557bIjIJkFsLKtWtnLulDwh54ogt1WsOrVltbcJ-94XqD5TmHcB8L3OTiuqTt0jOIE7FXzsVNQ'}`
      }
    });
    return next.handle(request);
  }
}