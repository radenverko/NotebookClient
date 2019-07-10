import { Notebook } from "../model/notebook";
export interface Note {
  id: string;
  title: string;
  text: string;
  notebookId: string;
  lastModifiedOn: string;
}
