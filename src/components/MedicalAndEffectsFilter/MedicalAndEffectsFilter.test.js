import React from "react";
import MedicalAndEffectsFilter from "./MedicalAndEffectsFilter";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";



describe("MedicalAndEffectsFilter", () => {
  const history = createMemoryHistory();
  
  it('Should display a title', () => {
    history.push("/medicinal");
    const { getByText } = render(
      <Router history={history}>
        <MedicalAndEffectsFilter />
      </Router>
    );
    expect(getByText("Filter your selection by Medical Symptoms")).toBeInTheDocument();
    })  

  it('Should display medicinal benefit filtering options on the medicinal page', () => {
    history.push("/medicinal");
    const { getAllByRole, getByText } = render(
      <Router history={history}>
        <MedicalAndEffectsFilter />
      </Router>
    );
      expect(getAllByRole("checkbox")).toHaveLength(13);
      expect(getByText('Depression')).toBeInTheDocument()
      expect(getByText('Insomnia')).toBeInTheDocument()
  })

  it('Should display positive effect filtering options on the medicinal page', () => {
    history.push("/mood");
    const { getAllByRole, getByText } = render(
      <Router history={history}>
        <MedicalAndEffectsFilter />
      </Router>
    );
      expect(getAllByRole("checkbox")).toHaveLength(12);
      expect(getByText('Relaxed')).toBeInTheDocument()
      expect(getByText('Hungry')).toBeInTheDocument()
  })

  
})
