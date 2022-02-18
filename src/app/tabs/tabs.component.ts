import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  TabLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.TabLinks = [
        {
            label: 'Tasks',
            link: './Tasks',
            index: 0
        }, {
            label: 'Add Task',
            link: './Input',
            index: 1
        }
    ];
}
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.TabLinks.indexOf(this.TabLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
  }

