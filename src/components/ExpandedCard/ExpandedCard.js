import React from 'react'
import './ExpandedCard.css'
import { WeedStoreContext } from '../../WeedStore'
import { observer } from 'mobx-react-lite';

const ExpandedCard = observer(() => {
  // const weedStore = useContext(WeedStoreContext)

  return (
    <section className='expanded-strain-container'>
      <div className='strain-overview-left-box'>
        <h2>African Kush</h2>
        <p className='strain-type-tag'>Sativa</p>
        <img
          src="/assets/Cannabis1.jpeg"
          alt="cannabis image"
          className="cannabis-img"
        />
        <p className='strain-details'>Flavor Profile: Piney, Citrusy</p>
        <p className='strain-details'>Helps With: Fatigue, Cramps</p>
      </div>
      <div className='strain-overview-middle-box'>
        <h2 className='description-header'>Description</h2>
        <p className='description-content'>One Ring to rule them all,
One Ring to find them,
One Ring to bring them all
and in the darkness bind them.</p>
        <div className='effects-box'>
          <div className='effects-column'>
            <img className='effect-img' src="/assets/Happy.svg"></img>
            <p className='strain-effect-tag positive-effect'>relaxed</p>
            <p className='strain-effect-tag positive-effect'>happy</p>
          </div>
          <div className='effects-column'>
            <img className='effect-img' src="/assets/Sad.svg"></img>
            <p className='strain-effect-tag negative-effect'>dry mouth</p>
            <p className='strain-effect-tag negative-effect'>see ghosts</p>
          </div>
        </div>
      </div>
      <div className='strain-overview-right-box'>
        <button className='back-button'>Back</button>
        <button className='favorite-strain-button'>
          Favorite
          <img className='favorite-img' src="/assets/favorite-nope.png" alt="fire-icon"/>
          </button>
      </div>
    </section>
  )
})
export default ExpandedCard;
