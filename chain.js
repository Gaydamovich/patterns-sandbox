/** Pattern Chain of responsibility (Цепочка зависемостей) JS **/

class Mathematics {
  constructor(value) {
    this.value = value
    this.init = value
  }

  add = (number) => {
    this.value += number
    return this
  }

  dec = (number) => {
    this.value -= number
    return this
  }

  multiply = (number) => {
    this.value *= number
    return this
  }

  division = (number) => {
    this.value /= number
    return this
  }

  get values () {
    return this.value
  }

  drop = () => {
    this.value = this.init
    return this
  }
}

const math = new Mathematics(0)

const result = math
  .add(1)
  .add(10)
  .dec(5)
  .division(2)
  .multiply(5)
  .values  // 15

console.group('Chain of responsibility')
console.log(result, math)
console.groupEnd()