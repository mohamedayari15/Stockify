import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userData: any = []

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userData = this.authService.getUser()
    console.log(this.userData)
  }
}
