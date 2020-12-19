class BuilderTemplate {
  build() {
    this.setEngine('V8')
    this.setHeadLights('Xenon')
    this.setDoors(4)
    this.setWeels('Sports')
    return this
  }
}

class Audi extends BuilderTemplate {
  setEngine(value) {
    this.engine = value
  }
  
  setHeadLights(value) {
    this.headLigths = value
  }
  
  setDoors(value) {
    this.doors = value
  }
  
  setWeels(value) {
    this.weels = value
  }
}

class Lexus extends BuilderTemplate {
  setEngine(value) {
    this.engine = value
  }
  
  setHeadLights(value) {
    this.headLigths = value
  }
  
  setDoors(value) {
    this.doors = value
  }
  
  setWeels(value) {
    this.weels = value
  }
}

console.group('Template')
const audi = new Audi().build()
const lexus = new Lexus().build()
console.log(audi, lexus)
console.groupEnd()