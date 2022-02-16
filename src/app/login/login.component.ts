import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../auth/models/login.model";
import { AuthService } from "../auth/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(loginForm) {
    console.log(loginForm.value);
    // TODO: apply validation rules...
    const loginData: Login = loginForm.value;
    this.authService.authenticate(loginData)
      .subscribe(data => { // success
        // redirect...
        this.router.navigate(['playground']);
      }, error => {
        console.log('Error occurred. Error data: ', error);
      });
  }
}
