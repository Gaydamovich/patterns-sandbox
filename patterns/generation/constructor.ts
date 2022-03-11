/** Pattern Constructor (Конструктор) JS **/

const Server = function (host: string, protocol = 'http') {
  this.host = host
  this.protocol = protocol
}

Server.prototype.getUrl = function () {
  return `${this.protocol}://${this.host}${window.location.pathname}`
}

console.group('Constructor')
console.log(new Server(window.location.host).getUrl())
console.groupEnd()
