import { render } from "@testing-library/react";
import Square from "../Square";

const startingProps = {
  tile: {
    value: 1,
    x: 1,
    y: 1,
  },
};

describe("Square", () => {
  it("renders", () => {
    const { container } = render(<Square {...startingProps} />);

    expect(container).toMatchSnapshot();
  });
});
