import React, { useEffect, useContext, useState } from "react";
import "./MedicalFilter.css";
import { useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { WeedStoreContext } from "../../WeedStore";

const MedicalFilter = observer(() => {
  const weedStore = useContext(WeedStoreContext);
  const location = useLocation();
  const { type } = useParams();
  
  
  const allFilterClickListener = (e) => {
    console.log(type);
    console.log(location.pathname);
    console.log("FILTER clicked", e.target.name);
    const name = e.target.name
    weedStore.currentStrains = weedStore.currentStrains.filter(strain => {
     return  strain.effects.medical.includes(name); 
    });
    console.log(weedStore.currentStrains);
    console.log(weedStore.currentStrains.length);
    
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
