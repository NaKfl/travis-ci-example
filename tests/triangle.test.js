import Point from 'models/point.model';
import Triangle from 'models/triangle.model';

describe('Đầu vào không là Point', () => {
  test('Đầu vào là số', () => {
    expect(() => {
      const a = new Point(0, 0);
      const b = 1;
      const c = new Point(0, 0);
      const t = new Triangle(a, b, c);
    }).toThrowError('Đầu vào tam giác không hợp lệ');
  });

  test('Đầu vào là chuỗi', () => {
    expect(() => {
      const a = 'point';
      const b = new Point(0, 0);
      const c = new Point(0, 0);
      const t = new Triangle(a, b, c);
    }).toThrowError('Đầu vào tam giác không hợp lệ');
  });
});

describe('Đầu vào là Point', () => {
  test('Tam giác vuông', () => {
    const a = new Point(0, 0);
    const b = new Point(0, 1.94);
    const c = new Point(2.94, 0);
    const triangle = new Triangle(a, b, c);
    const type = triangle.classify();
    const perimeter = Math.round(triangle.perimeter() * 1000000) / 1000000;
    expect(type).toBe('Tam giác vuông');
    expect(perimeter).toBe(8.402386);
  });

  test('Tam giác vuông cân', () => {
    const a = new Point(0, 0);
    const b = new Point(7, 0);
    const c = new Point(0, 7);
    const triangle = new Triangle(a, b, c);
    const type = triangle.classify();
    const perimeter = Math.round(triangle.perimeter() * 1000000) / 1000000;
    expect(type).toBe('Tam giác vuông cân');
    expect(perimeter).toBe(23.899495);
  });

  test('Tam giác cân', () => {
    const a = new Point(0, 2);
    const b = new Point(-0.5, 0);
    const c = new Point(0.5, 0);
    const triangle = new Triangle(a, b, c);
    const type = triangle.classify();
    const perimeter = Math.round(triangle.perimeter() * 1000000) / 1000000;
    expect(type).toBe('Tam giác cân');
    expect(perimeter).toBe(5.123106);
  });

  test('Tam giác đều', () => {
    const a = new Point(1, 0);
    const b = new Point(-1, 0);
    const c = new Point(0, 1.73205080757);
    const triangle = new Triangle(a, b, c);
    const type = triangle.classify();
    const perimeter = Math.round(triangle.perimeter() * 1000000) / 1000000;
    expect(type).toBe('Tam giác đều');
    expect(perimeter).toBe(6.0);
  });

  test('Tam giác tù', () => {
    const a = new Point(0, 0);
    const b = new Point(100, 0);
    const c = new Point(-100, 100);
    const triangle = new Triangle(a, b, c);
    const type = triangle.classify();
    const perimeter = Math.round(triangle.perimeter() * 1000000) / 1000000;
    expect(type).toBe('Tam giác tù');
    expect(perimeter).toBe(465.028154);
  });

  test('Tam giác nhọn', () => {
    const a = new Point(1.1, 0);
    const b = new Point(2, 2);
    const c = new Point(3, 0);
    const triangle = new Triangle(a, b, c);
    const type = triangle.classify();
    const perimeter = Math.round(triangle.perimeter() * 1000000) / 1000000;
    expect(type).toBe('Tam giác nhọn');
    expect(perimeter).toBe(6.329239);
  });
});
