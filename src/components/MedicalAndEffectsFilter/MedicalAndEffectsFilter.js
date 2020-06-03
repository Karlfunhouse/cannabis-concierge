import React, { useContext, useState, useEffect } from "react";
import "./MedicalAndEffectsFilter.css";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { WeedStoreContext } from "../../WeedStore";
import FlavorFilter from '../FlavorFilter/FlavorFilter';


const MedicalAndEffectsFilter = observer(() => {
  const weedStore = useContext(WeedStoreContext);
  const location = useLocation(); //returns path of page for conditional
  const locationPath = location.pathname.substr(1) // taking off forward slash
  const [hide, addClass] = useState("null");

  useEffect(() => {
    if (locationPath === "medicinal") {
      addClass("hide");
    }
}, [])

  weedStore.getSelectorStatus(locationPath)
  const allFilterClickListener = (e) => {
    weedStore.resetDesiredEffects()
    const name = e.target.name
    if (e.target.checked) {
      weedStore.setStrainStatusTrue(name)
    }
    if (!e.target.checked) {
      weedStore.setStrainStatusFalse(name)
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

  const moodOrFlavor = (
    <div>
      <h3 className="filter-title">
        Please filter by
        <label
          className={
            (weedStore.filteredByEffect === null ||
              weedStore.filteredByEffect === true) ?
            "selected-topic" : null
          }
        >
          <input
            type="radio"
            value="effect"
            name="title"
            onClick={(e) => weedStore.updateFilterByEffect(e.target.value)}
          />{" "}
          Effect{" "}
        </label>
        or
        <label
          className={
            (weedStore.filteredByEffect === false ? "selected-topic" : null)
          }
        >
          <input
            type="radio"
            value="flavor"
            name="title"
            onClick={(e) => weedStore.updateFilterByEffect(e.target.value)}
          />{" "}
          Flavor
        </label>
      </h3>
    </div>
  );

  return (
    <>
      <h3 className="filter-title">
        {locationPath === "medicinal"
          ? "Filter your selection by Medical Symptoms"
          : moodOrFlavor}
      </h3>
        {weedStore.filteredByEffect === null ||
        weedStore.filteredByEffect === true ? (
            <div className="selection-menu"> {selectionMenu} </div>
        ) : (
          <FlavorFilter className={hide} />
        )}
    </>
  );
})

export default MedicalAndEffectsFilter
