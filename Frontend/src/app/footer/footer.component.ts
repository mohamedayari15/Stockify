import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  loggedIn: boolean = false

  constructor(private authService : AuthService){}

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn()
    console.log(this.loggedIn)
  }
}
