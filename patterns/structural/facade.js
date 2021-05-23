/**
 * В каждом классе заложена сложная вычислительная логика
 */
class Layout {}
class Road {}
class Point {}
class Local {}

/**
 * Название абстрактное для простоты понимания
 */
class LightFacade {
  buildRoute(type, local, startPoint, endPoint) {
    // Инкапсулируем сложную логику в простом интерфейсе (obj.buildRoute())
    const layout = new Layout(type)
    const points = new Point(startPoint, endPoint)
    return layout
        .apply(new Road(), new Local(local), points)
        .check()
        .execute()
  }
}

const facade = new LightFacade()
facade.buildRoute('FLY', 'PARIS', '32.5', '2523.7')