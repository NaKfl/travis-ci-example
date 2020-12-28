import Point from './point.model';
class Triangle {
  constructor(a, b, c) {
    if (!(a instanceof Point && b instanceof Point && c instanceof Point))
      throw Error('Đầu vào tam giác không hợp lệ');

    const ab = Point.distance(this.a, this.b);
    const ac = Point.distance(this.a, this.c);
    const bc = Point.distance(this.b, this.c);
    if (ab + ac < bc || ab + bc < ac || bc + ac < ab)
      return 'Không phải tam giác';

    this.a = a;
    this.b = b;
    this.c = c;
  }

  classify() {
    const ab = Point.distance(this.a, this.b);
    const ac = Point.distance(this.a, this.c);
    const bc = Point.distance(this.b, this.c);

    if (
      Math.hypot(ab, ac) === bc ||
      Math.hypot(ab, bc) === ac ||
      Math.hypot(bc, ac) === ab
    )
      return 'Tam giác vuông';

    if (ab === ac && ab === bc) return 'Tam giác đều';

    if (ab === ac || ab === bc || bc === ac) return 'Tam giác cân';

    if (
      ab * ab + ac * ac < bc * bc ||
      ab * ab + bc * bc < ac * ac ||
      bc * bc + ac * ac < ab * ab
    )
      return 'Tam giác tù';

    return 'Tam giác nhọn';
  }

  perimeter() {
    const ab = Point.distance(this.a, this.b);
    const ac = Point.distance(this.a, this.c);
    const bc = Point.distance(this.b, this.c);
    return ab + ac + bc;
  }
}

export default Triangle;
