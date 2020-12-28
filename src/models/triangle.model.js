import Point from './point.model';

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  classify() {}

  perimeter() {
    const ab = Point.distance(this.a, this.b);
    const ac = Point.distance(this.a, this.c);
    const bc = Point.distance(this.b, this.c);
    return ab + ac + bc;
  }
}

export default Triangle;
