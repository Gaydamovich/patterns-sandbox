abstract class Car {
  abstract start(): void
  abstract stop(): void
}

class VW extends Car {
  id = 'vw'

  start() {
    console.log(`Car(${this.id}) is started...`)
  }

  stop() {
    console.log(`Car(${this.id}) is stopped...`)
  }
}

class Lada extends Car {
  start() {
    console.log(`Я не могу завестись!`)
  }

  stop() {
    console.log(`Я же и так не завелась :)`)
  }
}

abstract class CarFactory {
  check(): void {
    const car: Car = this.createCar()
    car.start()
    car.stop()
  }

  abstract createCar(): Car
}

class VWFactory extends CarFactory {
  createCar(): Car {
    return new VW()
  }
}

class LadaFactory extends CarFactory {
  createCar(): Car {
    return new Lada()
  }
}

// Example
function checkCar(model: string) {
  const Factories: Record<string, typeof CarFactory> = {
    vw: VWFactory,
    lada: LadaFactory,
  }

  const car: CarFactory = new (Factories[model] as typeof LadaFactory)
  car.check()
}
