import "./assets/css/normalize.css";
import "./assets/css/main.css";

import { buttons } from "./components/buttos.js";
import { mainInput } from "./components/maininput.js";
import { getNumbers } from "./numbers.js";

export async function printBoard() {
  const items = await getNumbers();
  const input = mainInput();
  const element = document.createElement("div");
  element.classList.add("main");
  const element2 = document.createElement("div");
  element2.classList.add("board");
  element.appendChild(element2);
  element2.appendChild(input);
  items
    .map((item) =>
      element2.appendChild(buttons(item.key, item.operator, item.action))
    )
    .join("");
  return element;
}

printBoard().then((element) => document.body.appendChild(element));
