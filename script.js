// // Complete the js code
// function Car(make, model) {
// 	constructor(){
// 		this._make=make;
// 		this._model=model;
// 	};
// 	getMakeModel(){
// 		return (`${this._make} ${this._model}`);
// 	}
// }

// function SportsCar(make, model, topSpeed) {
// 	constructor(){
// 		this._make=make;
// 		this._model=model;
// 		this._topSpeed=topSpeed;
// 	}
// 	getTopSpeed(){
// 		return this._topSpeed;
// 	}
// }

function Car(make, model) {
    this._make = make;
    this._model = model;
}

Car.prototype.getMakeModel = function () {
    return `${this._make} ${this._model}`;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Inherit properties from Car
    this._topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype); // Inherit methods from Car
SportsCar.prototype.constructor = SportsCar; // Fix constructor reference

SportsCar.prototype.getTopSpeed = function () {
    return this._topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
