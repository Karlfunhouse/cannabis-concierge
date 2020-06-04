import React from "react";
import ActivityFilter from "./ActivityFilter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe('ActivityFilter', () => {
  it('should display 6 activity buttons', () => {
    const { getByText } = render(<ActivityFilter />);
    expect(getByText('Netflix & Chill'))
    expect(getByText('Yoga & Meditation'))
    expect(getByText('Nature'))
    expect(getByText('Social / Music'))
    expect(getByText('Artsy'))
    expect(getByText('Cooking'))
  })
});