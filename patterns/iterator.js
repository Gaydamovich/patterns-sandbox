/** Pattern Iterator (Итератор) JS **/

class MyIterator {
  constructor(from = 0, to) {
    this.from = from
    this.to = to
  }

  [Symbol.iterator]() {
    return {
      from: this.from,
      to: this.to,
      next() {
        if (this.from < this.to) {
          return { value: this.from++, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

console.group('Iterator')
for (const count of new MyIterator(0, 4)) console.log(count);
console.groupEnd()