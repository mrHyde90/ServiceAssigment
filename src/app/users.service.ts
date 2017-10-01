import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

//si actualizas por aqui al counterService, no tendra efecto en los demas hijos
//paa que el ngOnInit sirva necesitas ser un componente

@Injectable()
export class UsersService {


	activeUsers = ['Max', 'Anna'];
	inactiveUsers = ['Chris', 'Manu'];

	constructor(private counterService: CounterService){}


	onAddActiveUser(id:number){
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
	}

	onInactiveUser(id:number){
		this.inactiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
	}
	
}