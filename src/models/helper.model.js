class Helper {
  static eps = 0.000001;

  static isEqual(a, b) {
    return Math.abs(a - b) <= Helper.eps;
  }
}

export default Helper;
