import { Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private usersService: UsersService, private counterService: CounterService){}
  activeUsers:number;
  inactiveUsers:number;
  updateAll(){
    this.activeUsers = this.counterService.activeUser;
    this.inactiveUsers = this.counterService.inactiveUser;
  }

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers.length;
    this.inactiveUsers = this.usersService.inactiveUsers.length;
  }
  /*usersActive:string[];
  usersInactive:string[];

  ngOnInit(){
    this.usersActive = this.usersService.activeUsers;
    this.usersInactive = this.usersService.inactiveUsers;
  }*/



 /* activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  } */
}
