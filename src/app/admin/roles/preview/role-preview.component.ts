import { Component, OnInit } from "@angular/core";
import { RoleService } from "../services/role.service";

@Component({
  selector: 'app-role-preview',
  templateUrl: './role-preview.component.html'
})
export class RolePreviewComponent implements OnInit {

  roles: any[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
      this.getAll();
  }

  private getAll() {
    this.roleService.getAll().subscribe(data => {
      this.roles = data;
    });
  }
}
