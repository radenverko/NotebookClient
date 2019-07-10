import { Component, OnInit } from "@angular/core";
import { Notebook } from "./model/notebook";
import { ApiService } from "../../shared/api.service";
import { Note } from "./model/note";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;
  searchText: string;

  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getAllNotebooks();
    this.getAllNotes();
  }

  public getAllNotebooks() {
    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.notebooks = res;
      },
      err => {
        this.toastrService.error("An error has occurred!", "Error", {
          closeButton: true,
          positionClass: "toast-center-center",

          timeOut: 1500,
          extendedTimeOut: 1000
        });
        setTimeout(() => {
          location.reload();
        }, 4000);
      }
    );
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      res => {
        this.notes = res;
      },
      err => {
        this.toastrService.error(
          "An error has occurred while downloading notes!",
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

  createNotebook() {
    let newNotebook: Notebook = {
      name: "New notebook",
      id: null,
      nbOfNotes: 0
    };

    this.apiService.postNotebook(newNotebook).subscribe(
      res => {
        newNotebook.id = res.id;
        this.notebooks.push(newNotebook);
      },
      err => {
        this.toastrService.error(
          "An error has occurred while saving notebook!",
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

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.postNotebook(updatedNotebook).subscribe(
      res => {},
      err => {
        this.toastrService.error(
          "An error has occurred while saving notebook!",
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

  deleteNotebook(notebook: Notebook) {
    if (confirm("Are you sure you want to delete notebook?")) {
      this.apiService.deleteNotebook(notebook.id).subscribe(
        res => {
          let indexOfNotebook = this.notebooks.indexOf(notebook);
          this.notebooks.splice(indexOfNotebook, 1);
        },
        err => {
          this.toastrService.error("Couldn't delete notebook!", "Error", {
            closeButton: true,
            positionClass: "toast-center-center",

            timeOut: 1500,
            extendedTimeOut: 1000
          });
          setTimeout(() => {
            location.reload();
          }, 4000);
        }
      );
    }
  }

  deleteNote(note: Note) {
    if (confirm("Are you sure you want to delete this note?")) {
      this.apiService.deleteNote(note.id).subscribe(
        res => {
          let indexOfNote = this.notes.indexOf(note);
          this.notes.splice(indexOfNote, 1);
        },
        err => {
          this.toastrService.error(
            "An error has occurred while deleting note!",
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
  createNote(notebookId: string) {
    let newNote: Note = {
      id: null,
      title: "New Note",
      text: "Write some text in here",
      lastModifiedOn: null,
      notebookId: notebookId
    };

    this.apiService.saveNote(newNote).subscribe(
      res => {
        newNote.id = res.id;
        this.notes.push(newNote);
      },
      err => {
        this.toastrService.error(
          "An error has occurred while saving feedback!",
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

  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook;
    this.apiService.getNotesByNotebook(notebook.id).subscribe(
      res => {
        this.notes = res;
      },
      err => {
        this.toastrService.error(
          "An error has occurred while downloading notes!",
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

  updateNote(updatedNote: Note) {
    this.apiService.saveNote(updatedNote).subscribe(
      res => {},
      err => {
        this.toastrService.error(
          "An error has occurred while saving note!",
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

  selectAllNotes() {
    this.selectedNotebook = null;
    this.getAllNotes();
  }
}
