import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginService } from '../services/apiServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _formBuilder:FormBuilder,private loginService:LoginService) { }
  loginForm:FormGroup
  ngOnInit() {
    this.loginInitForm();
  }

  /**
   * Init Form for login
   */
  loginInitForm(){
    this.loginForm = this._formBuilder.group({
      userId:[null,Validators.required],
      password:[null,Validators.required]
    })
  } 

  /**
   * Login
   */
  login(){
    if(this.loginForm.valid){
    // Uncomment after login api
      // this.loginService.login(this.loginForm.value).subscribe(data=>{
      //   if(data){
      //     this.router.navigate(['../features']);
      //   }
      // },error=>{
      //   console.log('error');
      // });
      this.router.navigate(['../features']);
    }
  }
}
