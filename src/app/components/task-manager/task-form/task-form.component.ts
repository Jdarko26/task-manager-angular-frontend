import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../service/task.service';
//import { Task } from '../../../Tasks';
import { MessageService } from '../../../service/message.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string;
 //tasks: Task[] = [];
  constructor(private ts:TaskService,private msg:MessageService ) { }

  ngOnInit(): void {
  }

  Add() {
    this.ts.addTask(this.title).subscribe(data =>{
      console.log("item added " + data.id);
      this.msg.setMessage("something happened")
     // this.tasks.push(data)
    });

    this.title = "";
    
  }

}
