import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { NotesComponent } from "./components/notes/notes.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { Router, RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NoteComponent } from "./components/notes/note/note.component";
import { NoteTextFilterPipe } from "./shared/note-text-filter.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { UserComponent } from "./components/users/user/user.component";
import { UsersComponent } from "./components/users/users.component";

const appRoutes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "notes",
    component: NotesComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent
  },
  {
    path: "",
    component: NotesComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedbackComponent,
    NotesComponent,
    NotfoundComponent,
    NoteComponent,
    NoteTextFilterPipe,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
