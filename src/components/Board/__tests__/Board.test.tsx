import { render } from "@testing-library/react";
import Board from "../Board";

describe("Board", () => {
  it("renders", () => {
    const { container } = render(<Board />);

    expect(container).toMatchSnapshot();
  });
});
