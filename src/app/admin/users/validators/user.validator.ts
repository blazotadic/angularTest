import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "../services/user.service";

export class UserValidator {

  static doesUsernameExists(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return userService.existsByUsername(control.value)
        .pipe(
          map(responseData => {
            if (responseData.status) {
              return {
                usernameAlreadyExists: control.value
              };
            }
            return null;
          })
        )
    };
  }
}
