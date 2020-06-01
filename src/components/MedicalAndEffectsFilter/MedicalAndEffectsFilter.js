import React, { useEffect, useContext, useState } from "react";
import "./MedicalAndEffectsFilter.css";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { WeedStoreContext } from "../../WeedStore";

const MedicalAndEffectsFilter = observer(() => {
  const weedStore = useContext(WeedStoreContext);
  const location = useLocation(); //returns path of page for conditional
  const locationPath = location.pathname.substr(1) // taking off forward slash

  let selectorStatus = [...weedStore[locationPath]].reduce((allItems, item) => {
    allItems[item] = false
    return allItems
  }, {});
  
  
  const allFilterClickListener = (e) => {
    const name = e.target.name
    let selectors = []
    if (e.target.checked) {
      selectorStatus[name] = true;
    }
    if (!e.target.checked) {
      selectorStatus[name] = false;
    }
    weedStore[locationPath].forEach(
      (effect) => selectorStatus[effect] && selectors.push(effect)
    );
    if (selectors.length === 0) {
      weedStore.currentStrains = weedStore.allStrains
    }
    let filtered = weedStore.allStrains.filter((strain) => {
      return selectors.every((effect) => {
        if (locationPath === "medicinal") {
          return strain.effects.medical.indexOf(effect) !== -1;
        }
        if (locationPath === "mood") {
          return strain.effects.positive.indexOf(effect) !== -1;
        }
      });
    });
    weedStore.currentStrains = filtered;
    console.log(locationPath);
    
    console.log(selectors);
    console.log("weed store ", weedStore.currentStrains);
    console.log("weed store size", weedStore.currentStrains.length);
    console.log("weed store ", weedStore.currentStrains);
    console.log("weed store size", weedStore.currentStrains.length);
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
