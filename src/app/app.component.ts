import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { Task } from './interface/task';
import { SharedDatasService } from './service/shared-datas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Todo';
  ngOnInit(): void {}
  constructor(public sharedDatasService: SharedDatasService) {}
}
