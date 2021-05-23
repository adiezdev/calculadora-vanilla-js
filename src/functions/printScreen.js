import Calculator from "../class/Calcularto";

const calculator = new Calculator();

export async function printInBoard(key, operador, action) {
  const inputscreen = await document.querySelector(".input");
  let beforenum = inputscreen.innerHTML;

  if (Number.isInteger(key)) {
    handleNumber(key);
  } else if (action === "reset") {
    inputscreen.innerHTML = updateScreen(0);
    calculator.reset();
  } else {
    handleOperation(operador);
  }
  function handleNumber(key) {
    if (calculator.getOpreation() === "=") {
      inputscreen.innerHTML = updateScreen(key);
      calculator.setOperation("");
    } else if (calculator.getOpreation() && !calculator.getIsIt()) {
      calculator.setBeforenum(beforenum);
      inputscreen.innerHTML = updateScreen(key);
    } else if (key || key === 0) {
      inputscreen.innerHTML = updateScreen(
        beforenum === "0" || operador === "=" ? key : beforenum + key
      );
    }
  }
  function updateScreen(value = 0) {
    return (beforenum = value);
  }
  function handleOperation(operador) {
    if (calculator.getIsIt()) {
      calculator.calculate(beforenum);
      inputscreen.innerHTML = updateScreen(calculator.getNum());
      calculator.setIsIt(false);
    }
    calculator.setOperation(operador);
  }
}
