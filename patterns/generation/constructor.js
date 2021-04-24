/** Pattern Constructor (Конструктор) JS **/

function Server(host, protocol = 'http') {
  if (!new.target) return new Server(host, protocol)
  this.host = host
  this.protocol = protocol
}

Server.prototype.getUrl = function () {
  return `${this.protocol}://${this.host}${window.location.pathname}`
}

console.group('Constructor')
console.log(Server(window.location.host).getUrl())
console.groupEnd()