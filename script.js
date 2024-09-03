// function Car(make,model){
// 	constructor(){
// 		this.make=make;
// 		this.model=model;
// 	}
// }
// Car.prototype.getMakeModel=function(){
// 	return this.make+" "+this.model;
// }
// function SportsCar(make,model,topSpeed){
// 	constructor(){
// 		Car.call(this,make,model);
// 		this.topSpeed=topSpeed;
// 	}
// }
// SportsCar.prototype = Object.create(Car.prototype);
// SportsCar.prototype.constructor = SportsCar;
// SportsCar.prototype.getTopSpeed=function(){
// 	return this.topSpeed;
// }
// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Inherit properties from Car
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
