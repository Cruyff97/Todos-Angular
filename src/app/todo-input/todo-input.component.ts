import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../interface/task';
import { SharedDatasService } from '../service/shared-datas.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  emitter:any;
  call:any;
  TodoForm = new FormGroup({
  task :new FormControl(''),
  deadline : new FormControl(''),
  description: new FormControl(''),
  });

  constructor(public inputShared: SharedDatasService) { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.TodoForm.value);
  
this.inputShared.pushTodo(this.TodoForm.value)
}
}
