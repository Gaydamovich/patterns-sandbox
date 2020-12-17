class Car {
  constructor() {
    this.signaling = false
    this.parking = false
    this.isSportVersion = false
  }
}

class Director {
  constructor(Builder) {
    this.builder = new Builder()
  }
  
  constructorSportCar() {
    return this.builder
      .setIsSportVersion(true)
      .addParking('parking-sport')
      .addEngine('V8')
      .build()
  }
  
  constructorBaseCar() {
    return this.builder
      .addParking('parking')
      .build()
  }
  
}

class CarBuilder {
  constructor() {
    this.car = new Car()
  }
  
  addSignaling(value) {
    this.car.signaling = value
    return this
  }
  
  addParking(value) {
    this.car.parking = value
    return this
  }
  
  setIsSportVersion(value) {
    this.car.isSportVersion = value
    return this
  }
  
  addEngine(value) {
    this.car.engine = value
    return this
  }
  
  build() {
    return this.car
  }
}

console.group('Builder')

console.log(new CarBuilder().build())
const car = new CarBuilder()
  .addEngine('V12')
  .addParking(true)
  .setIsSportVersion(true)
  .build()
console.log(car)

// Using Director
const constructCar = new Director(CarBuilder)
console.log(constructCar.constructorBaseCar())
console.log(constructCar.constructorSportCar())

console.groupEnd()