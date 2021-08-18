import { Component, OnInit } from '@angular/core';
import { Task } from '../../../Tasks';
import { TaskService } from '../../../service/task.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskservice: TaskService, private msg:MessageService) {

   }

  ngOnInit(): void {
    this.getAllTask();
    this.msg.getMessage().subscribe(data => {
       this.getAllTask();
    });
  }

  getAllTask()
  {
    this.taskservice.getTask().subscribe(all => {
      this.tasks = all;
      console.log(this.tasks); 
    });
  }

}
