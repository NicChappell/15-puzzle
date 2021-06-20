import { render } from "@testing-library/react";
import Tile from "../Tile";

const startingProps = {
  tile: 1,
};

describe("Tile", () => {
  it("renders", () => {
    const { container } = render(<Tile {...startingProps} />);

    expect(container).toMatchSnapshot();
  });
});
