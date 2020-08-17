/** Pattern Constructor (Конструктор) JS **/

function Server(ip, port = 80, protocol = 'https') {
  if (!new.target) return new Server(ip, port, protocol)
  this.ip = ip
  this.port = port
  this.protocol = protocol
}

Server.prototype.getUrl = function () {
  return `${this.protocol}://${this.ip}:${this.port}`
}

console.group('Constructor')
console.log(Server('128.0.0.0').getUrl())
console.groupEnd()