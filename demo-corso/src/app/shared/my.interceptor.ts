import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>> {
    const token = 'xxxxxxxxxx999999';

    let clonedRequest = request.clone({
      headers: request.headers.set('Authorization','Bearer ' + token)
    });

    if(!clonedRequest.headers.has('Content-Type')){
      clonedRequest = clonedRequest.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      })
    }

    return next.handle(clonedRequest).pipe(
      tap((response: HttpEvent<any>) => {
        console.log('.....event');
        if(response instanceof HttpResponse){
          console.log(response);
        }
      }),
      catchError( (error: HttpErrorResponse) => {
        let data = {status: error.status, reason: error.error}
        console.log('++++');
        console.log(data);
        return throwError(data);
      })
    );
  }
}
