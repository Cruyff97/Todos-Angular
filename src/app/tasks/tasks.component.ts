import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interface/task';
import { SharedDatasService } from '../service/shared-datas.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks?:Task[];
  constructor(public inputShared: SharedDatasService) { }

  ngOnInit(): void {
this.tasks=this.inputShared.getTodos();
      }

}
