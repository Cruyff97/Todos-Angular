import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { Task } from './interface/task';
import { SharedDatasService } from './service/shared-datas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 newTasks?: any;
  tasks: Task[]=[{
    task: 'Learn Angular',
    deadline: "03-04-2030",
    description: "I had to learn Angular in depth"
  },
  {
    task: 'Learn React',
    deadline: "03-04-2040",
    description: "I had to learn React in depth"
  }]
  title = 'Todo';
  shared?: Subscription
  ngOnInit(): void {
  
  }
  constructor(public sharedDatasService: SharedDatasService) {
  
  }
 



}
