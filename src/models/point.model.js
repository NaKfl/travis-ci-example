class Point {
  constructor(x, y) {
    if (!(typeof x === 'number' && typeof y === 'number'))
      throw Error('Đầu vào điểm không hợp lệ');

    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
}

module.exports = Point;
