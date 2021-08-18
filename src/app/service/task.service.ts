import { Injectable } from '@angular/core';
import {  HttpHeaders } from '@angular/common/http';
import { Task } from '../Tasks';
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
/*
const options = {
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'enctype': 'multipart/form-data',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
}
*/


@Injectable({
  providedIn: 'root'
})
export class TaskService {

 url:string ="http://localhost:9090/tm-backend-laravel/public/";
  //private headers: HttpHeaders;
  //options: any;

  constructor(private http: HttpClient) {
    /*
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'enctype': 'multipart/form-data',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    */
    //this.options = new HttpRequest({ headers: this.headers });

   }
  addTask(title): Observable <Task> {
    const newTask = new Task(title);
    return this.http.post<Task>(this.url+'add', newTask );
  }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'get');
  }
  deleteTask(no):Observable<Task> {
    const newTask = {
       id:no,
      title: 'not set',
      statis: false,
       date:new Date()
     }
     return this.http.post<Task>(this.url+'delete', newTask);
  }

  getOne(no): Observable<Task> {
     const newTask = {
       id:no,
      title: 'not set',
      statis: false,
       date:new Date()
     }
return this.http.post<Task>(this.url +'getone', newTask);
  }

}
