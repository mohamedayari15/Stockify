import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  loggedIn: boolean = false

  constructor(private authService : AuthService){}
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
