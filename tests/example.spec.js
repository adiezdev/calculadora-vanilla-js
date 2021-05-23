// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

import { getByText } from "@testing-library/dom";

import { printBoard } from "../src/index";

describe("Test generales", () => {
  test("Se renderiza bien el board", async () => {
    const container = await printBoard();
    document.body.appendChild(container);
    const buttons = getByText(container, "AC");
    expect(buttons).toBeInTheDocument();
  });
});
