import { printInBoard } from "../functions/printScreen.js";

export function buttons(item, operador, action) {
  const btn = document.createElement("button");
  btn.innerHTML = item;
  btn.onclick = () => printInBoard(item, operador, action);
  return btn;
}
