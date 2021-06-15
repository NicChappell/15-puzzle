import { render } from "@testing-library/react";
import MoveCounter from "../MoveCounter";

describe("MoveCounter", () => {
  it("renders", () => {
    const { container } = render(<MoveCounter />);

    expect(container).toMatchSnapshot();
  });
});
