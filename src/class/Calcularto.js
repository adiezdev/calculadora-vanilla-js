export default class Calculator {
  constructor() {
    this.num = 0;
    this.operation = "";
    this.isIt = false;
    this.init = false;
  }
  getNum() {
    return this.num;
  }
  getOpreation() {
    return this.operation;
  }
  setOperation(operation) {
    this.operation = operation;
  }
  setBeforenum(value) {
    if (!this.isIt) {
      this.num = Number(value);
      return (this.isIt = true);
    }
  }
  getIsIt() {
    return this.isIt;
  }
  setIsIt(isIt) {
    this.isIt = isIt;
  }
  reset() {
    this.num = 0;
    this.operation = "";
    this.isIt = false;
  }
  calculate(value) {
    const numero = Number(value);
    switch (this.operation) {
      case "+":
        this.num += numero;
        break;
      case "-":
        this.num -= numero;
        break;
      case "*":
        this.num *= numero;
        break;
      case "/":
        this.num /= numero;
        break;
      default:
        break;
    }
    this.operation = "";
  }
}
