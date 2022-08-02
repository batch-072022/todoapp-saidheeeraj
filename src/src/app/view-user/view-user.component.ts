import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user={id:101, name:"Madhuri", email:"m@gmail.com"};

  deleteUser(){
    alert("Successfully Deleted");
  }

}
