// old lib
class LibDataString {
  getData() {
    return 'This is string type'
  }
}

// new lib
class LibDataJson {
  getJSON() {
    return JSON.stringify({ words: ['This', 'is', 'string', 'type'] })
  }
}

class AdapterLibData extends LibDataString {
  constructor(public lib: LibDataJson) {
    super()
  }

  getData(): string {
    return JSON.parse(this.lib.getJSON()).words.join(' ')
  }
}


function client(lib: LibDataString) {
  try {
    const response = lib.getData()
    console.log(lib.constructor.name, 'res: ', response)
  } catch (e) {
    console.log('e: ', (e as any).message)
  }
}

function main() {
  client(new LibDataString()) // It is good
  // @ts-ignore
  client(new LibDataJson()) // It is broken
  // with adapter
  client(new AdapterLibData(new LibDataJson())) // Eee!! The adapter works :)
}

main()
