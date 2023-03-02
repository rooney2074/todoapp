import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname:any=''
  pswd:any=''
  loginForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private router:Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    
  }
  
  register(){
    var uname:any = this.loginForm.value.uname;
    var pswd:any = this.loginForm.value.pswd;

    if(uname == localStorage.getItem('username' || '')){
      alert('Name Already Taken');
    }
    else{
      if(pswd == localStorage.getItem('password' || '')){
        alert('password Is Taken')
      }else{
        localStorage.setItem('username',uname);
    localStorage.setItem('password',pswd);

     var user=localStorage.getItem('username' || '')
     console.log(user)
     var pass=localStorage.getItem('password' || '')
     console.log(pass)

     alert('registration successfull');
     this.router.navigateByUrl('')
      }
    }

  }

}
