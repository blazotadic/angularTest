import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/services/auth.service";
import { NavbarLink } from "./navbar.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isMobileViewActive: boolean = false;
  isUserAuthenticated: boolean = false;

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.authService.isAuthenticated.subscribe(data => {
        this.isUserAuthenticated = data;
      });
  }

  toggleMobileView(): void {
    this.isMobileViewActive = !this.isMobileViewActive;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
