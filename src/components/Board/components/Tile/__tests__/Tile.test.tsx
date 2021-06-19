import { render } from "@testing-library/react";
import Tile, { ITile } from "../Tile";

const startingProps: ITile = {
  value: 1,
  x: 0,
  y: 0,
};

describe("Tile", () => {
  it("renders", () => {
    const { container } = render(<Tile {...startingProps} />);

    expect(container).toMatchSnapshot();
  });
});
