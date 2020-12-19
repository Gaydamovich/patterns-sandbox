/** Pattern Observer (Наблюдатель) JS **/

class Subject {
  observers = []

  subscribe = (observer) => {
    this.observers.push(observer)
  }

  unsubscribe = (observer) => {
    this.observers = this.observers.filter(o => o !== observer)
  }

  start = (action) => {
    this.observers.forEach(o => o.update(action))
  }
}

class Observer {
  constructor(state) {
    this.state = state
    this.init = state
  }

  update = (action) => {
    console.log(this)
    switch (action) {
      case 'inc':
        this.state = ++this.state
        break;
      case 'dec':
        this.state = --this.state
        break;
      default:
        return this.state
    }
  }
}

const stream = new Subject()

const o1 = new Observer(0)
const o2 = new Observer(10)

stream.subscribe(o1)
stream.subscribe(o2)

console.group('Observer')
stream.start('inc')
stream.start('inc')
console.groupEnd()