export class CounterService{
	inactiveUser:number = 0;
	activeUser:number = 0;
	activeAction:number = 0;
	inactiveAction:number = 0;

	updateCounter(inactiveLength:number, activeLength:number){
		this.inactiveUser = inactiveLength;
		this.activeUser = activeLength;
	}
}