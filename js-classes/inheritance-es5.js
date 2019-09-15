function Car (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
    if (fuelCapacity === undefined) {
        fuelCapacity = 60;
    }

    if (fuelConsumption === undefined) {
        fuelConsumption = 10;
    }

    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function () {
    return this.name + ' ' + this.model;
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
}

Car.prototype.changeColor = function (color) {
    if (this.color === color) {
        alert('Your car already has the same color');
    } else {
        this.color = color;
        alert('The color has been changed');
    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
    if (fuel < 10) {
        alert('You must refuel');
    } 

    let time = Math.round(kilometers / this.maxSpeed);
    alert('Your road will take ' + time + ' hours')

    let neededFuel = Math.round((kilometers * this.fuelConsumption / 100), 1);
    
    if (fuel < neededFuel) {
        let neededRefuel = Math.ceil((neededFuel - fuel) / this.fuelCapacity);
        alert('You  need to refuel on your road ' + neededRefuel + ' times')
    }
}

function Audi () {
    Car.apply(this, arguments);
    this.sunroof = true;
    this.ledHeadlights = true;
}

Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

Audi.prototype.openSunroof = function () {
    if (this.sunroof) {
        alert('Your sunroof is open');
    }
}

Audi.prototype.closeSunroof = function () {
    if (this.sunroof) {
        alert('Your sunroof is closed');
    }
}

function Bmw () {
    Car.apply(this, arguments);
    this.rearDrive = true;
    this.leatherInterior = true;
    this.driverSeatVentilation = true;
}

Bmw.prototype = Object.create(Car.prototype);
Bmw.prototype.constructor = Bmw;

Bmw.prototype.onDriverSeatVentilation = function () {
    if (this.driverSeatVentilation) {
        alert ('Driver seat ventilation was turned on')
    }
}

Bmw.prototype.offDriverSeatVentilation = function () {
    if (this.driverSeatVentilation) {
        alert ('Driver seat ventilation was turned off')
    }
}

function Hyundai () {
    Car.apply(this, arguments);
    this.smartKey = true;
    this.gpsNavigation = true;
}


Hyundai.prototype = Object.create(Car.prototype);
Hyundai.prototype.constructor = Hyundai;

Hyundai.prototype.setRoute = function () {
    if (this.gpsNavigation) {
        alert('The route was set')
    }
}

Hyundai.prototype.changeRoute = function () {
    if (this.gpsNavigation) {
        alert('The route was changed')
    }
}

let audiQ7 = new Audi("Audi", "Q7", 2017, "red", 244, 100, 12.5); 
let bmwX6 = new Bmw("BMW", "x6", 2016, "white", 240, 85, 13); 
let hyundaiAccent = new Hyundai("Hyundai", "accent", 2019, "grey", 192, 60, 6.6); 