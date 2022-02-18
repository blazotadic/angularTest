import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RoleService } from "../../roles/services/role.service";
import { UserService } from "../services/user.service";
import { UserValidator } from "../validators/user.validator";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {

  userCreateForm: FormGroup;
  roles: any[] = [];

  constructor(
    private roleService: RoleService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
      this.getRoles();
      this.initializeForm();
  }

  createUser(): void {
    console.log(this.userCreateForm);
  }

  private getRoles() {
    this.roleService.getAll().subscribe(data => this.roles = data);
  }

  private initializeForm(): void {
    this.userCreateForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, [Validators.required, Validators.minLength(6), this.validateUsername.bind(this)], UserValidator.doesUsernameExists(this.userService)),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      roles: new FormControl(null)
    });
  }

  private validateUsername(control: FormControl): any | null {
    const username = control.value;
    if (username === 'heril06') {
      return {
        usernameInvalid: 'heril06'
      };
    }
    return null;
  }
}
