/** Pattern Singleton (Одиночка) JS **/

class Port {
  constructor(port) {
    this.port = port
    if (Port.instance) return Port.instance
    Port.instance = this
  }
}

const port1 = new Port(8080)
const port2 = new Port(62634)

console.group('Singleton')
console.log(port1)
console.log(port2)
console.groupEnd()