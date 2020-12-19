/** Pattern Command (Команд) JS **/

class User {
  constructor(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getJob() {
    return this.job
  }

  getFullInfo() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Работа: ${this.job}`
  }
}

class Command {
  metaInfoMethods = []

  constructor(object) {
    this.object = object
  }

  callMethods(method) {
    this.metaInfoMethods.push(method)
    return this.object[method]()
  }
}

const command = new Command(
  new User('Dima', 25, 'Web Technology')
)

console.group('Command')
console.log(command)
console.log(command.callMethods('getName'))
console.log(command.callMethods('getFullInfo'))
console.log(command.metaInfoMethods)
console.groupEnd()