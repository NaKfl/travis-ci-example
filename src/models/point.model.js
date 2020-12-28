class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    console.log(`Point: (${this.x}, ${this.y})`);
  }
}

export default Point;
