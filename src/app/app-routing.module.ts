import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AdminComponent } from "./admin/admin.component";
import { RolePreviewComponent } from "./admin/roles/preview/role-preview.component";
import { UserCreateComponent } from "./admin/users/create/user-create.component";
import { UserPreviewComponent } from "./admin/users/preview/user-preview.component";
import { IsAlreadyAuthenticatedGuard } from "./auth/guards/is-already-authenticated.guard";
import { IsAuthenticatedGuard } from "./auth/guards/is-authenticated.guard";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { PlaygroundDetailComponent } from "./playground-detail/playground-detail.component";
import { PlaygroundDetailResolver } from "./playground-detail/playground-detail.resolver";
import { PlaygroundComponent } from "./playground/playground.component";
import { PlaygroundGuard } from "./playground/playground.guard";
import { RegisterComponent } from "./register/register.component";
import { StudentComponent } from "./student/student.component";

const routes: Routes = [
  {
    path: 'student', // http://localhost:4200/student
    component: StudentComponent
  },
  {
    path: 'playground', // http://localhost:4200/playground
    component: PlaygroundComponent,
    data: { allowEdit: false, hasAccess: true },
    canActivate: [ PlaygroundGuard ]
  },
  {
    path: 'playground-detail/:id',
    component: PlaygroundDetailComponent,
    resolve: { param1: PlaygroundDetailResolver }
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsAlreadyAuthenticatedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsAlreadyAuthenticatedGuard]
  },
  {
    path: 'admin', // http://localhost:4200/admin
    component: AdminComponent,
    canActivate: [IsAuthenticatedGuard],
    // canActivateChild: []
    children: [
      { path: 'users', component: UserPreviewComponent },
      { path: 'roles', component: RolePreviewComponent },
      { path: 'users/create', component: UserCreateComponent }
    ]
  },
  {
    path: '**', redirectTo: 'student' // http://localhost:4200/test
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
