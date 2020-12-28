import Point from './models/point.model';

const point1 = new Point(0, 0);
const point2 = new Point(0, 1);

const distance = Point.distance(point1, point2);
console.log('distance', distance);
