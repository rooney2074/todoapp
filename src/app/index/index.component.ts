import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user:any=''
  task:any=''
  tasks:any=[]

  constructor() {}

  ngOnInit(): void {
    this.user=localStorage.getItem('username' || '')
  }

  add(){
    this.tasks.push(this.task)

  }  

  remove(i:any){
    this.tasks.map((item:any,index:any)=>{
      if(i == item){
        this.tasks.splice(index,1);
      alert('Task removed')
      }
      

    })
  }

}
