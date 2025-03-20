import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn() && this.authService.isUser()) {
      console.log("User access granted ✅");
      return true;
    }
    else {
      console.warn("User access denied ⛔️");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
