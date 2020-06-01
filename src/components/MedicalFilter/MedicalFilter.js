import React, { useEffect, useContext, useState } from "react";
import "./MedicalFilter.css";
import { useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { WeedStoreContext } from "../../WeedStore";

const MedicalFilter = observer(() => {
  const weedStore = useContext(WeedStoreContext);
  const location = useLocation();
  const { type } = useParams();

  let medicalItemsStatus = [...weedStore.medicalEffects].reduce((allItems, item) => {
    allItems[item] = false
    return allItems
  }, {});
  
  
  const allFilterClickListener = (e) => {
    const name = e.target.name
    let selectors = []
    if (e.target.checked) {
      medicalItemsStatus[name] = true;
    }
    if (!e.target.checked) {
      medicalItemsStatus[name] = false;
    }
    weedStore.medicalEffects.forEach(
      (effect) => medicalItemsStatus[effect] && selectors.push(effect)
    );
    if (selectors.length === 0) {
      weedStore.currentStrains = weedStore.allStrains
    }
    let filtered = weedStore.allStrains.filter((strain) => {
      return selectors.every((effect) => {
        return strain.effects.medical.indexOf(effect) !== -1;
      });
    });
    weedStore.currentStrains = filtered;
    console.log(selectors);
    console.log("weed store ", weedStore.currentStrains);
    console.log("weed store size", weedStore.currentStrains.length);
    console.log("weed store ", weedStore.currentStrains);
    console.log("weed store size", weedStore.currentStrains.length);
  }
    
  const selectionMenu = weedStore.medicalEffects.map((effect) => (
    <div key={effect} className="med-input">
      <input onClick={(e) => allFilterClickListener(e)} type="checkbox" name={effect} />
      <label htmlFor={effect}>{effect}</label>
    </div>
    )
  );

  return (
    <>
      <h3 className="filter-title">Filter your selection by Medical Symptoms</h3>
      <div className="selection-menu">
        {selectionMenu}
      </div>
    </>
  );
})

export default MedicalFilter
