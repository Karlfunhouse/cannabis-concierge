import React from "react";
import ReactDOM from "react-dom";
import CategoryCards from "./CategoryCards";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CategoryCards />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('CategoryCards', () => {
  it('should display strain cards', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CategoryCards />
      </BrowserRouter>
    );
    expect(getByText('Mood')).toBeInTheDocument()
    expect(getByText('Medicinal')).toBeInTheDocument()
    expect(getByText('Quiz')).toBeInTheDocument()
    expect(getByText('Activity')).toBeInTheDocument()
  })
})
