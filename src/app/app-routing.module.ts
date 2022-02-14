import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { UserPreviewComponent } from "./admin/users/preview/user-preview.component";
import { PlaygroundDetailComponent } from "./playground-detail/playground-detail.component";
import { PlaygroundDetailResolver } from "./playground-detail/playground-detail.resolver";
import { PlaygroundComponent } from "./playground/playground.component";
import { PlaygroundGuard } from "./playground/playground.guard";
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
    path: 'admin', // http://localhost:4200/admin
    component: AdminComponent,
    // canActivate: [],
    // canActivateChild: []
    children: [
      { path: 'users', component: UserPreviewComponent } // http://localhost:4200/admin/users
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
