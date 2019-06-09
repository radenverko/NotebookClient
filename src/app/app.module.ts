import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { NotesComponent } from "./notes/notes.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { Router, Routes, RouterModule } from "@angular/router";

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
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
