import { render } from "@testing-library/react";
import Row, { IRow } from "../Row";

const startingProps: IRow = {
  row: [1, 2, 3, 4],
  x: 0,
};

describe("Row", () => {
  it("renders", () => {
    const { container } = render(<Row {...startingProps} />);

    expect(container).toMatchSnapshot();
  });
});
