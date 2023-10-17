import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const body = JSON.stringify(userData);

    return this.http.post('http://localhost:3000/account/reg', body, { headers: headers });
  }

  authorizUser(userData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const body = JSON.stringify(userData);

    return this.http.post('http://localhost:3000/account/auth', body, { headers: headers });
  }

  storeUser(token: any, userData: any) {
    localStorage.setItem('token', token)
    localStorage.setItem('userData', JSON.stringify(userData))

    // this.token = token
    // this.userData = userData
  }
  
  logout() {
    // this.token = token
    // this.userData = userData
    localStorage.clear()
  }
}
