import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedIn: boolean = false;

  constructor(public authService : AuthService){}

  ngOnInit(){
    this.loggedIn = this.authService.isLoggedIn();
    console.log(this.loggedIn)
  }
}
