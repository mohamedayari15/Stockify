import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class AuthService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  register(registerData: any): Observable<any> {

    const endPoint = registerData.Role === 'Admin'? 'Admin/register': 'User/register'
    return this.http.post(`${this.apiUrl}/${endPoint}`, registerData);
  };

  login(loginData: any): Observable<any> {
    const endPoint = loginData.Role === 'User' ? 'User/login' : 'Admin/login'

    return this.http.post(`${this.apiUrl}/${endPoint}`, loginData).pipe(
      tap((res: any) => {

        if(res && res.Token){
          localStorage.setItem('Token', res.Token);
          console.log("✅ Token stored:", res.Token);
          localStorage.setItem('Role', res.Role);
          console.log("✅ Role stored:", res.Role);
        }
        else {
          console.warn("⚠️ No token received from the server!");
        }
      })
    )
  };

  getToken() {
    return localStorage.getItem('Token');
  }

  getRole(){
    return localStorage.getItem('Role')
  }

  isLoggedIn() {
    // const Token = this.getToken()
    // return !!Token
    return !!localStorage.getItem('Token');
  }
  
  isAdmin(): boolean{
    return this.getRole() === 'Admin'
  }

  isUser(): boolean{
    return this.getRole() === 'User'
  }

  logOut() {
    localStorage.removeItem('Token');
    if(this.getRole() === 'Admin')
      console.log("🚪 Admin Logged Out");
    else
      console.log("🚪 User Logged Out");
  }

  public getUser(): any {
    const Token = this.getToken();

    if (Token) {
      const payload = Token.split('.')[1];
      return JSON.parse(atob(payload));
    }
    else {
      return null;
    }
  }

};
