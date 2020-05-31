import React, { useContext } from 'react'
import './CardsContainer.css'
import { WeedStoreContext } from '../../WeedStore';
import { observer } from 'mobx-react-lite';


const CardsContainer = observer( () => {
  const weedStore = useContext(WeedStoreContext)

  // const showCards = 
    // weedStore.allStrains.map(strain => )
  //  <div>{weedStore.allStrains[0]}</div>
  
  
  return (
    <section className="CardsContainer">
      {/* { showCards} */}
      {/* <div>{weedStore.allStrains[1].name}</div> */}
      {/* {weedStore.allStrains[0] && console.log(weedStore.allStrains[0].effects)} */}
      {/* {console.log(weedStore.allStrains[0].effects)} */}
    </section>
  );
})

export default CardsContainer
