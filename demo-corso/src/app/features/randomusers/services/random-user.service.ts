import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUserResponse } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor( private http: HttpClient) { }
  getRandomUserResponse(): Observable<RandomUserResponse>
  {
    const users = 10;
    return this.http.get<RandomUserResponse>(
      environment.randomUsersApi + "?results=" + users);
  }
}
