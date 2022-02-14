import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  // { id: 1, firstName: 'Petar', lastName: 'Vukcevic', username: 'petar123', isActive: true },
  // { id: 2, firstName: 'Ivan', lastName: 'Bojanovic', username: 'ivan123', isActive: true },
  // { id: 3, firstName: 'Dimitrije', lastName: 'Raonic', username: 'dimitrije123', isActive: true }

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.getAll();
  }

  deactivate(id: number) {
    this.userService.deactivateById(id).subscribe(data => {
      this.getAll();
    }, error => {
      console.log('Deactivation error!');
    });
  }

  private getAll() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    }, error => {
      console.log('Error occurred.', error);
    });
  }

}
