import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {

  constructor(private router : Router, private authService : AuthService) { }
    
    logOut() {
      this.router.navigate(['/login']);
      this.authService.logOut()
    }
}
