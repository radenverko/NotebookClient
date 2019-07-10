import { Component, OnInit } from "@angular/core";
import { User } from "./model/user";
import { ApiService } from "../../shared/api.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  columns: string[] = ["#", "firstName", "lastName", "username", "email"];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllUsers();
  }
  public getAllUsers() {
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {}
    );
  }
}
