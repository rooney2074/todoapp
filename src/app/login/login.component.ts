import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:any=''
  pswd:any=''

  loginForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private router:Router,private fb:FormBuilder){}

  ngOnInit(): void {
    
  }

  login(){
    var uname = this.loginForm.value.uname;
    var pswd = this.loginForm.value.pswd;


    var user=localStorage.getItem('username' || '')
     console.log(user)
     var pass=localStorage.getItem('password' || '')
     console.log(pass)

     if(this.loginForm.value){
      if(uname == user){
        if(pswd == pass){
          alert('login Success')
          this.router.navigateByUrl('index')
        }else{
          alert('invalid password')
        }
       }else{
        alert('invalid user')
       }
     }else{
      alert('invalid Form')
     }

     
  }

}
