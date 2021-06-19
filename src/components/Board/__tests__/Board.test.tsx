import { render } from "@testing-library/react";
import Board, { IBoard } from "../Board";

const startingProps = {
  board: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
};

describe("Board", () => {
  it("renders", () => {
    const { container } = render(<Board {...startingProps} />);

    expect(container).toMatchSnapshot();
  });
});
