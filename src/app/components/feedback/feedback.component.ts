import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../../shared/api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"]
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: "",
    email: "",
    feedback: ""
  };

  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  sendFeedback(): void {
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        this.toastrService.info(
          "Thank you " + this.model.name + " for sending us your feedback!",
          "E-mail sent successfully!",
          {
            closeButton: true,
            positionClass: "toast-center-center",

            timeOut: 1500,
            extendedTimeOut: 1000
          }
        );
        setTimeout(() => {
          location.reload();
        }, 1500);
      },
      err => {
        this.toastrService.error(
          "An error has occurred while sending feedback",
          "Error",
          {
            closeButton: true,
            positionClass: "toast-center-center",

            timeOut: 1500,
            extendedTimeOut: 1000
          }
        );
        setTimeout(() => {
          location.reload();
        }, 4000);
      }
    );
  }
}

export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
