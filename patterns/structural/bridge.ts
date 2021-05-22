interface Figure {
  title: string
  color: Color
  draw: () => void
  paint: (color: Color) => string
}

interface Color {
  color: string
}

class Red implements Color {
  color = 'red'
}

class Blue implements Color {
  color = 'blue'
}

class Circle implements Figure {
  title: string
  color: Color

  constructor(subject: Color) {
    this.color = subject
    this.title = 'CIRCLE'
  }

  draw(): void {
    console.log(`Условно рисуем фигуру цвета: ${this.color.color} в UI`)
  }

  paint(subject: Color): string {
    this.color = subject
    return this.color.color
  }
}

class Box implements Figure {
  title: string
  color: Color

  constructor(subject: Color) {
    this.color = subject
    this.title = 'BOX'
  }

  draw(): void {
    console.log(`Условно рисуем фигуру цвета: ${this.color.color} в UI`)
  }

  paint(subject: Color): string {
    this.color = subject
    return this.color.color
  }
}

/**
 * Класс абстракции с помощью которой мы можем управлять сущностями единого интерфейса.
 * В данном примере мы построили Мост для сущностей типа Figure
 */
class AbstractFigure {
  figure: Figure

  constructor(figure: Figure) {
    this.figure = figure
  }

  drawFigure() {
    this.figure.draw()
  }

  paint(color: Color) {
    this.figure.paint(color)
  }
}

const circle = new Circle(new Red())
const af = new AbstractFigure(circle)

af.paint(new Blue())
af.drawFigure()