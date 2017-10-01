import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  //@Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  users: string[];
  @Output() updateEvent = new EventEmitter<void>();

  ngOnInit(){
  	this.users = this.usersService.inactiveUsers;
  }

  constructor(private usersService: UsersService, private counterService: CounterService){}

  onSetToActive(id: number){
  	this.usersService.onAddActiveUser(id);
    this.counterService.updateCounter(this.usersService.inactiveUsers.length, this.usersService.activeUsers.length );
    this.updateEvent.emit();
  }

 /* onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  } */
}
