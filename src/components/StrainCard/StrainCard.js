import React, { useContext } from "react";
import "./StrainCard.css";
import { WeedStoreContext } from "../../WeedStore";
import { observer } from "mobx-react-lite";

const StrainCard = observer(() => {
  const weedStore = useContext(WeedStoreContext);
  return (
    <div>
      <h2></h2>
    </div>
  )
})

export default StrainCard
