import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  fullName: String = '';
  Email: String = '';
  Password: String = '';
  confirmPassword: String = '';
  Role: String = 'Admin';

  successmsg: String = ''
  errormsg: String = ''

  constructor(private authService : AuthService, private Router: Router){}

  onSubmit(f: any) {
    console.log("Form Submitted!", f.value); 
    
    if (this.Password !== this.confirmPassword) {
      console.log("Passwords do not matches")
      this.errormsg = 'Passwords do not match !'
    }

    const registerData = {
      fullName: this.fullName,
      Email: this.Email,
      Password: this.Password,
      Role: this.Role,
    }

    this.authService.register(registerData).subscribe(res => {
      console.log("Register Successful", res);
      this.successmsg = 'Registration Successful. Redirecting to Login Page...';

      setTimeout(() => {
        this.Router.navigate(['/login']);
      }, 2000)
    })
  };
};
