import React from "react";
import { render } from "@testing-library/react";
import GameBoard from "../GameBoard";

describe("GameBoard", () => {
  it("renders", () => {
    const { container } = render(<GameBoard />);

    expect(container).toMatchSnapshot();
  });
});
