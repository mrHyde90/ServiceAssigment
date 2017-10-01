import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
	users:string[];
  activeAction:number;
  @Output() activeUserEvent = new EventEmitter<void>();

	constructor(private usersService: UsersService, private counterService: CounterService){}
  /*@Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }*/

  ngOnInit(){
    this.users = this.usersService.activeUsers;
    this.activeAction = this.counterService.activeAction;
  }

  onSetToInactive(id:number){
  	this.usersService.onInactiveUser(id);
    this.counterService.updateCounter(this.usersService.inactiveUsers.length, this.usersService.activeUsers.length );
    this.counterService.activeAction = this.counterService.activeAction + 1;
    this.activeAction = this.counterService.activeAction;
    this.activeUserEvent.emit();
  }
}
