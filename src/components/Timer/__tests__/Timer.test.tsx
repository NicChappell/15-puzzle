import { render } from "@testing-library/react";
import Timer from "../Timer";

describe("Timer", () => {
  it("renders", () => {
    const { container } = render(<Timer />);

    expect(container).toMatchSnapshot();
  });
});
