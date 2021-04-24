/** Pattern Singleton (Одиночка) JS **/

class Port {
  private static port: Port

  private ip: string

  private constructor() {
    this.ip = '80:80'
  }

  public static getInstance () {
    if (!Port.port) {
      Port.port = new Port()
    }

    return Port.port
  }
}

const port1 = Port.getInstance()
const port2 = Port.getInstance()

console.group('Singleton')
console.log(port1)
console.log(port2)
console.groupEnd()