import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground/playground.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/list/student-list.component';
import { StudentDetailComponent } from './student/detail/student-detail.component';
import { ProgramComponent } from './program/program.component';
import { StudentService } from './shared/student.service';
import { AppRoutingModule } from './app-routing.module';
import { PlaygroundDetailComponent } from './playground-detail/playground-detail.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
