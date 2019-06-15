import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { NotesComponent } from "./components/notes/notes.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { Router, Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
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
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
