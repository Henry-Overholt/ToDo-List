import { Component, OnInit } from "@angular/core";
import { ToDo } from "../interfaces/to-do";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoes: ToDo[] = [
    { task: "Do the laundry.", completed: false },
    { task: "Clean the bathroom.", completed: true },
    { task: "Try to move stuff with your mind.", completed: true },
    { task: "Buy dog food.", completed: false },
    { task: "Complete Todo Lab.", completed: false },
    { task: "Ask questions of everything.", completed: false },
    { task: "Get groceries.", completed: true }
  ];
  constructor() {}
  ngOnInit() {}
}
