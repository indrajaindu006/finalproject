import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTodo();
  }

  private getTodo() {
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
    });
  }

    updateTodo(id: number) {
      this.router.navigate(['update-todo', id]);
    }

    deleteTodo(id: number) {
      this.todoService.deleteTodo(id).subscribe( data => {
        console.log(data);
        this.getTodo();
      });
  }

  todoDetails(id: number) {
      this.router.navigate(['todo-details', id]);
    }

  getValue() {
    this.router.navigate(['search-todo']);
  }
}
