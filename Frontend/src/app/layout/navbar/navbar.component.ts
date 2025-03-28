import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedIn: boolean = false;

  constructor(public authService : AuthService){}

  ngOnInit(){
    this.authService.islogedInSubject.subscribe(
      ress => {
        this.loggedIn = ress || this.authService.isLoggedIn()
        console.log(this.loggedIn)
      }
    )
    console.log(this.loggedIn)
  }
}
