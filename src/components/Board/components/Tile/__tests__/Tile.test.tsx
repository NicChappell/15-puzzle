import { render } from "@testing-library/react";
import Tile from "../Tile";

describe("Tile", () => {
  it("renders", () => {
    const { container } = render(<Tile />);

    expect(container).toMatchSnapshot();
  });
});
