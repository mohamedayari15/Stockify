import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup;

  successmsg: String = ''
  errormsg: String = ''

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.myForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Role: ['Admin', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm)
      const loginData = this.myForm.value
      console.log(loginData)

      this.authService.login(loginData).subscribe(
        res => {
          console.log("Login Successful", res)
          console.log("🔑 Token stored in localStorage: ", this.authService.getToken())

          this.successmsg = 'Login Successful, Redirecting...'
          this.errormsg = ''

          if (loginData.Role === "Admin") {
            setTimeout(() => {
              this.router.navigate(['admin-interface/products-list-admin'])
            }, 1500);
          }
          else {
            const redirectUrl = localStorage.getItem('redirectUrl');
            console.log("📌 redirectUrl récupéré après login:", redirectUrl);
            if (redirectUrl) {
              localStorage.removeItem('redirectUrl');
              setTimeout(() => {
                this.router.navigate([redirectUrl]); 
              }, 1500);
            }
            else{
              this.router.navigate(['user-interface/welcome'])
            }
          }
        },
        err => {
          console.log("❌ Login Error", err)
          this.errormsg = 'Login Failed, Please try again...'
          this.successmsg = ''
        }
      )
    }
  }

};
