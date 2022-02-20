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
 remove(e: Event,id : any){
   e.stopPropagation();
   this.inputShared.completedPush(this.tasks![id])
   this.inputShared.removeTask(id) 
this.tasks= this.tasks?.filter((task:Task)=> task.title!==this.tasks![id].title )
  }
  
  ngOnInit(): void {
this.tasks=this.inputShared.getTodos();
      }

}
