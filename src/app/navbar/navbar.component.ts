import { Component } from "@angular/core";
import { NavbarLink } from "./navbar.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isMobileViewActive: boolean = false;

  links: NavbarLink[] = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "Student",
      path: "/student"
    },
    {
      name: "Playground",
      path: '/playground'
    },
    {
      name: "Contact",
      path: "/contact"
    },
    {
      name: "About Us",
      path: "/about"
    }
  ];

  toggleMobileView(): void {
    this.isMobileViewActive = !this.isMobileViewActive;
  }
}
