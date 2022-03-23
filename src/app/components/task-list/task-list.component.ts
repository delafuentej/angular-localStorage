import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[]=[];
    constructor(public dataService: DataService) { 
      
  

  }

  ngOnInit(): void {
    this.tasks= this.dataService.getTask();
  }
  addTask(task :Task){
    this.dataService.addTask(task);
  }

}
