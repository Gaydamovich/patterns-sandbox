interface Strategy {
  title: string
  paint: (color: string) => string
}

interface Car {
  strategyPaint: Strategy
  color: string
  setStrategyPaint: (strategy: Strategy) => void
  paint: (color: string) => void
}

class BasicPaint implements Strategy {
  title = 'BasicPaint'

  paint(color: string) {
    // Преобразует переданный цвет в базовый окрас
    return `base-${color}`
  }
}

class SportPaint implements Strategy {
  title = 'SportPaint'

  paint(color: string) {
    // Преобразует переданный цвет в уникальный спортивный окрас
    return `metallic-${color}`
  }
}

class Audi implements Car {
  strategyPaint: Strategy
  color: string

  constructor(strategy: Strategy) {
    this.strategyPaint = strategy
  }

  setStrategyPaint(strategy: Strategy) {
    this.strategyPaint = strategy
  }

  paint(color: string) {
    this.color = this.strategyPaint.paint(color)
  }
}

const audi = new Audi()
audi.setStrategyPaint(new BasicPaint())
audi.paint('black')
audi.setStrategyPaint(new SportPaint())
audi.paint('black')
