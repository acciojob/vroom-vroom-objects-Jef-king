let Car=function(make,model){
	constructor(){
		this.make=make;
		this.model=model;
	}
}
Car.Prototype.getMakeModel=function(){
	return this.make+" "+this.model;
}
let SportsCar=function(make,model,topSpeed){
	constructor(){
		this.make=make;
		this.model=model;
		this.topSpeed=topSpeed;
	}
}
SportsCar.Prototype.getTopSpeed=function(){
	return this.topSpeed;
}