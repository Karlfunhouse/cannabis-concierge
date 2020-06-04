import React from "react";
import ReactDOM from "react-dom";
import FlavorFilter from "./FlavorFilter";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <FlavorFilter />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('FlavorFilter', () => {
  it('should display strain flavors', () => {
    const { getByText, getAllByRole } = render(<FlavorFilter />)
    expect(getByText('Nutty')).toBeInTheDocument()
    expect(getByText('Blueberry')).toBeInTheDocument()
    expect(getByText('Grapefruit')).toBeInTheDocument()
    expect(getAllByRole('radio')).toHaveLength(48)
  })
})