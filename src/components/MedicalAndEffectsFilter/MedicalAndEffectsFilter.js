import React, { useEffect, useContext, useState } from "react";
import "./MedicalAndEffectsFilter.css";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { WeedStoreContext } from "../../WeedStore";

const MedicalAndEffectsFilter = observer(() => {
  const weedStore = useContext(WeedStoreContext);
  const location = useLocation(); //returns path of page for conditional
  const locationPath = location.pathname.substr(1) // taking off forward slash

  const allFilterClickListener = (e) => {
    weedStore.getSelectorStatus(locationPath)
    weedStore.resetDesiredEffects()
    const name = e.target.name
    if (e.target.checked) {
      weedStore.selectorStatus[name] = true;
    }
    if (!e.target.checked) {
      weedStore.selectorStatus[name] = false;
    }
    weedStore[locationPath].forEach(
      (effect) => weedStore.selectorStatus[effect] && weedStore.addDeseriredEffect(effect)
    );
    if (weedStore.filterSelectors.length === 0) {
      weedStore.resetCurrentStrains()
    }
    weedStore.getFilteredStrains(locationPath)
  }

  const selectionMenu = weedStore[locationPath].map((effect) => (
    <div key={effect} className="med-input">
      <input onClick={(e) => allFilterClickListener(e)} type="checkbox" name={effect} />
      <label htmlFor={effect}>{effect}</label>
    </div>
    )
  );

  return (
    <>
      <h3 className="filter-title">{locationPath === "medicinal" ? "Filter your selection by Medical Symptoms" : "Filter your selection by effects"}</h3>
      <div className="selection-menu">
        {selectionMenu}
      </div>
    </>
  );
})

export default MedicalAndEffectsFilter
