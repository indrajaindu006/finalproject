import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {

  todo: Todo;
  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo = new Todo();
  }
  // @ts-ignore
  onSubmit(id: any) {
    console.log(id);
    this.todoService.getTodoById(id).subscribe( data => {
      console.log(data);
      this.todo = data;
      console.log(this.todo);
      this.router.navigate(['search-todo', id]);
  }
  // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
  ,  error => console.log(error));
}
}
