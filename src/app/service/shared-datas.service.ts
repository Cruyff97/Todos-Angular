import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root',
})
export class SharedDatasService {
  Todos: Task[]=[{
    title: 'Learn Angular',
    deadline: "03-04-2030",
    description: "I had to learn Angular in depth"
  },
  {
    title: 'Learn React',
    deadline: "03-04-2040",
    description: "I had to learn React in depth"
  }];
  completed: Task[]=[];

getCompleted(){
  return this.completed
  
}
  getTodos() {
    console.log(this.Todos);
    return this.Todos;
  }
  removeTask(id:number){
    this.Todos= this.Todos?.filter((task:Task)=> task.title!==this.Todos![id].title )
  }
  pushTodo(todo:any){
this.Todos.push(todo)
  }
  completedPush(el:Task){
    this.completed.push(el)
  }
}
