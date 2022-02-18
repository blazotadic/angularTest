import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground/playground.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/list/student-list.component';
import { StudentDetailComponent } from './student/detail/student-detail.component';
import { ProgramComponent } from './program/program.component';
import { StudentService } from './shared/student.service';
import { AppRoutingModule } from './app-routing.module';
import { PlaygroundDetailComponent } from './playground-detail/playground-detail.component';
import { AdminComponent } from './admin/admin.component';
import { UserPreviewComponent } from './admin/users/preview/user-preview.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';
import { RegisterComponent } from './register/register.component';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { UserCreateComponent } from './admin/users/create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundComponent,
    StudentComponent,
    StudentListComponent,
    StudentDetailComponent,
    ProgramComponent,
    PlaygroundDetailComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    UserPreviewComponent,
    LoginComponent,
    RegisterComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastNotificationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    StudentService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
