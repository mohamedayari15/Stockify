import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) {
      console.log("Admin access granted ✅");
      return true;
    }
    else {
      console.warn("Admin access denied ⛔️");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
