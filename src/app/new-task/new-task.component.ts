import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task:any;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }
  onSaveTask(task:any)
  {
    this.authService.saveTask(task).subscribe(
      resp=>{
        this.task=resp;
        },
   
        err=>{
        console.log(err);
        }
    )
  }

}
