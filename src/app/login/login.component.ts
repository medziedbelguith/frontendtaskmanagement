import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(user:any)
  {
   this.authService.login(user)
   .subscribe(resp=>{
   let jwt=resp.headers.get('Authorization');
  // console.log(resp.headers.get('Authorization'));
  this.authService.saveToken(jwt);
  this.router.navigateByUrl('/tasks');
   },
   err=>{
     this.mode=1;
   })
  }
}
