import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  title:any;
  description:any;
  @Output() taskAdded = new EventEmitter<Task>();
  constructor() { }
  


  ngOnInit(): void {
  }

  addTask(){
    this.taskAdded.emit({
      title:this.title,
      description: this.description,
      hide: true
    });
    this.title="";
    this.description="";
  }
}
