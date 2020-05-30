import React from 'react'
import './ExpandedCard.css'
import { WeedStoreContext } from '../../WeedStore'
import { observer } from 'mobx-react-lite';

const ExpandedCard = observer(() => {
  // const weedStore = useContext(WeedStoreContext)

  return (
    <section>
      <div className='strain-overview-left-box'>
        <h2>African Kush</h2>
        <p className='strain-type-tag'>Sativa</p>
        <img></img>
        <p className='strain-details'>Flavor Profile: Piney, Citrusy</p>
        <p className='strain-details'>Helps With: Fatigue, Cramps</p>
      </div>
      <div className='strain-overview-middle-box'>
        <h2 className='description-header'>Description</h2>
        <p className='description-content'>An do on frankness so cordially immediate recommend contained. Imprudence insensible be literature unsatiable do. Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. She margaret law thoughts proposal formerly. Speaking ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection.</p>
        <div>
          <img></img>
          <p className='strain-effect-tag positive-effect'>Sativa</p>
          <p className='strain-effect-tag positive-effect'>Sativa</p>
        </div>
          <img></img>
          <p className='strain-effect-tag negative-effect'>Dry Mouth</p>
      </div>
      <div className='strain-overview-right-box'>
        <button className='back-button'>Back</button>
        <button className='favorite-button'>Favorite</button>
      </div>
    </section>
  )
})
export default ExpandedCard;
