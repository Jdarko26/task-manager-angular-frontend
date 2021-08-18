import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../Tasks';
import { TaskService } from '../../../service/task.service';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task; 
  constructor(private route:ActivatedRoute, private ts:TaskService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.ts.getOne(data.id).subscribe(tsk => {
        console.log(tsk)
        this.task = tsk;
      });
      
    });
  }

}
