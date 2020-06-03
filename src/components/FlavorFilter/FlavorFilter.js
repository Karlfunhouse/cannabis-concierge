import React, { useContext} from 'react'
import "./FlavorFilter.css";
import { WeedStoreContext } from "../../WeedStore";


const FlavorFilter = () => {
  const weedStore = useContext(WeedStoreContext);
   const selectionMenu = weedStore.flavors.map((flavor) => (
     <div key={flavor} className="flavor-input">
       <label htmlFor={flavor} >
         <input
           type="radio"
           id={flavor}
           value={flavor}
           name="flavor"
           onClick={(e) => weedStore.filterByFlavor(e.target.value)}
         />
         {flavor}
       </label>
     </div>
   ));
    return (
      <div className="flavor-menu">
        {selectionMenu}
      </div>
    )
}

export default FlavorFilter