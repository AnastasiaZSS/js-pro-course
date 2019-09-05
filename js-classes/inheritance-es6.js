class Car {
    constructor (name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName () {
        return `${this.name} ${this.model}`;
    }

    getAge () {
        return new Date().getFullYear() - this.year;
    }

    changeColor (color) {
        if (this.color == color) {
            alert('Your car already has the same color');
        } else {
            this.color = color;
            alert('The color has been changed');
        }
    }

    calculateWay (kilometers, fuel) {
        if (fuel < 10) {
            alert('You must refuel');
        } 
    
        let time = Math.round(kilometers / this.maxSpeed);
        alert('Your road will take ' + time + ' hours')
    
        let neededFuel = Math.round((kilometers * this.fuelConsumption / 100), 1)
        console.log(neededFuel);
        if (fuel < neededFuel) {
            let neededRefuel = Math.ceil((neededFuel - fuel) / this.fuelCapacity);
            alert('You  need to refuel on your road ' + neededRefuel + ' times')
        }
    }
} 

class Audi extends Car {
    constructor () {
        super(...arguments)
        this.sunroof = true;
        this.ledHeadlights = true;
    }

    openSunroof () {
        if (this.sunroof) {
            alert('Your sunroof is open');
        } 
    }

    closeSunroof () {
        if (this.sunroof) {
            alert('Your sunroof is closed');
        }
    }
}

class Bmw extends Car {
    constructor () {
        super(...arguments)
        this.rearDrive = true;
        this.leatherInterior = true;
        this.driverSeatVentilation = true;
    }

    onDriverSeatVentilation () {
        if (this.driverSeatVentilation) {
            alert ('Driver seat ventilation was turned on')
        }
    }
    
    offDriverSeatVentilation () {
        if (this.driverSeatVentilation) {
            alert ('Driver seat ventilation was turned off')
        }
    }
}

class Hyundai extends Car {
    constructor () {
        super(...arguments);
        this.smartKey = true;
        this.gpsNavigation = true;
    }

    setRoute () {
        if (this.gpsNavigation) {
            alert('The route was set')
        }
    }
    
    changeRoute () {
        if (this.gpsNavigation) {
            alert('The route was changed')
        }
    }
}

let audiQ7 = new Audi("Audi", "Q7", 2017, "red", 244, 100, 12.5); 
let bmwX6 = new Bmw("BMW", "x6", 2016, "white", 240, 85, 13); 
let hyundaiAccent = new Hyundai("Hyundai", "accent", 2019, "grey", 192, 60, 6.6); 