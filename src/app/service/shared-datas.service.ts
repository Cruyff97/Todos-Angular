import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root',
})
export class SharedDatasService {
  Todos: Task[]=[{
    task: 'Learn Angular',
    deadline: "03-04-2030",
    description: "I had to learn Angular in depth"
  },
  {
    task: 'Learn React',
    deadline: "03-04-2040",
    description: "I had to learn React in depth"
  }]


  getTodos() {
    console.log(this.Todos);
    return this.Todos;
    
  }
  pushTodo(todo:any){
this.Todos.push(todo)
  }
}
