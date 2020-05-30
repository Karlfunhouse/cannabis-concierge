import React, { useContext } from 'react'
import './CardsContainer.css'
import { WeedStoreContext } from '../../WeedStore';
import { observer } from 'mobx-react-lite';


const CardsContainer = observer(() => {
  const weedStore = useContext(WeedStoreContext)

  return (
    <section className="CardsContainer">
      {console.log(weedStore.allStrains[0])}
    </section>
  )
})

export default CardsContainer
