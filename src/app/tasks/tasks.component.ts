import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interface/task';
import { SharedDatasService } from '../service/shared-datas.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  panelOpenState = false;
 tasks?:Task[];
 clickButton = true; 
  constructor(public inputShared: SharedDatasService) { }
  moveUp(e: Event,id : any){
    console.log(id);
   console.log('this.tasks', this.tasks![id]);
   e.stopPropagation(); 
this.tasks= this.tasks?.filter((task:Task)=> task.title!==this.tasks![id].title )
  }
  
  ngOnInit(): void {
this.tasks=this.inputShared.getTodos();
      }

}
