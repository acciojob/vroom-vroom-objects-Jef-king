function Car(make,model){
	constructor(){
		this.make=make;
		this.model=model;
	}
}
Car.prototype.getMakeModel=function(){
	return this.make+" "+this.model;
}
function SportsCar(make,model,topSpeed){
	constructor(){
		Car.call(this,make,model);
		this.topSpeed=topSpeed;
	}
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed;
}