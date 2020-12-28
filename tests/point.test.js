import Point from '../src/models/Point.model';

describe('Đầu vào không là số', () => {
  test('x không phải là số, y là số', () => {
    expect(() => {
      new Point('x', 1);
    }).toThrowError('Đầu vào điểm không hợp lệ');
  });

  test('x là số, y không phải là số', () => {
    expect(() => {
      new Point(2, 'y');
    }).toThrowError('Đầu vào điểm không hợp lệ');
  });
});

describe('Đầu vào là số', () => {
  test('x và y đều là số nguyên dương', () => {
    const point = new Point(2, 1);
    expect(point instanceof Point).toBe(true);
  });

  test('x và y đều là số nguyên âm', () => {
    const point = new Point(-2, -1);
    expect(point instanceof Point).toBe(true);
  });

  test('x là số nguyên dương, y là số nguyên âm', () => {
    const point = new Point(2, -1);
    expect(point instanceof Point).toBe(true);
  });

  test('x là số nguyên âm, y là số nguyên dương', () => {
    const point = new Point(-2, 1);
    expect(point instanceof Point).toBe(true);
  });

  test('x và y đều là số thập phân dương', () => {
    const point = new Point(2.2, 1.6);
    expect(point instanceof Point).toBe(true);
  });

  test('x và y đều là số thập phân âm', () => {
    const point = new Point(-7.2, -1.1);
    expect(point instanceof Point).toBe(true);
  });

  test('x là số thập phân dương, y là số thập phân âm', () => {
    const point = new Point(2.52, -1.08);
    expect(point instanceof Point).toBe(true);
  });

  test('x là số thập phân âm, y là số thập phân dương', () => {
    const point = new Point(-2.12, 1.42);
    expect(point instanceof Point).toBe(true);
  });

  test('x bằng 0, y là số bất kì', () => {
    const point = new Point(0, 1.42);
    expect(point instanceof Point).toBe(true);
  });

  test('x là số bất kì, y bằng 0', () => {
    const point = new Point(232, 0);
    expect(point instanceof Point).toBe(true);
  });
});

describe('Khoảng cách giữa hai điểm', () => {
  test.each([[5, 6, 7, 8, 2.828427125]])(
    `Khoảng các từ (%d, %d) đến (%d, %d)`,
    (x1, y1, x2, y2, expDistance) => {
      const a = new Point(x1, y1);
      const b = new Point(x2, y2);
      const distance = Point.distance(a, b);
      expect(distance).toBe(expDistance);
    }
  );
});
