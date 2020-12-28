class Point {
  constructor(x, y) {
    if (!(typeof x === 'number' && typeof y === 'number'))
      throw Error('Đầu vào điểm không hợp lệ');

    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const distance = Math.hypot(a.x - b.x, a.y - b.y);
    return Math.round(distance * 1000000000) / 1000000000;
  }
}

export default Point;
