class Server {
    constructor(bus) {
        this.bus = bus
    }

    run() {
        this.bus.notice('start', 8080)
    }
}

class EventBus {
    constructor() {
        this.listens = {}
    }

    subscribe(event, listener) {
        if (!this.listens[event]) {
            this.listens[event] = []
        }
        this.listens[event].push(listener)
    }

    unsubscribe(event, listener) {
        if (this.listens[event]) {
            this.listens[event] = this.listens[event].filter(el => el !== listener)
        }
    }

    notice(event, data) {
        if (this.listens[event]) {
            this.listens[event].forEach(callback => callback(data))
        }
    }
}

class Client {
    constructor(bus, name) {
        this.name = name
        bus.subscribe('start', this.log)
    }

    log = (data) => {
        console.log(`Server has been started on port ${data} in client ${this.name}`)
    }
}

const bus = new EventBus()
const server = new Server(bus)

new Client(bus, 'Stepha')
new Client(bus, 'Karina')

console.group('PubSub')
server.run()
console.groupEnd()