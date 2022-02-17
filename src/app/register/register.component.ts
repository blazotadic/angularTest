import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Toaster, ToastType } from "ngx-toast-notifications";
import { AuthService } from "../auth/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  // temporary...
  roles: any[] = [
    { id: 28, name: 'ROLE_Developer' },
    { id: 30, name: 'ROLE_ADMIN' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: Toaster
  ) { }

  register(registerForm: NgForm) {
    this.authService.signup(registerForm.value)
      .subscribe(() => {
        this.toaster.open('Successfully registered!', {
          position: 'top-right',
          type: 'success',
          preventDuplicates: true
        });
        setTimeout(() => this.router.navigate(['login']), 1500);
      },error => this.handleError(error));
  }

  private handleError(error) {
    console.log('Error occurred!');
    this.toaster.open('Error has been occurred!', {
      position: 'top-right',
      type: 'warning'
    });
  }
}
