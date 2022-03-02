import { SharedDatasService } from './../service/shared-datas.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../interface/task';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent implements OnInit {
  completed?: Task[];
  panelOpenState = false;
  constructor(private sharedDatas: SharedDatasService) {}

  ngOnInit(): void {
    this.completed = this.sharedDatas.getCompleted();
  }
}
