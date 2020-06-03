import React, { useContext } from 'react'
import './ExpandedCard.css'
import { WeedStoreContext } from '../../WeedStore'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

const ExpandedCard = observer(() => {
  const weedStore = useContext(WeedStoreContext)
  const negEffects = weedStore.selectedStrain.effects.negative
    .map(effect => (<p className='strain-effect-tag positive-effect'>{effect}</p>))

  const posEffects = weedStore.selectedStrain.effects.positive
    .map(effect => (<p className='strain-effect-tag positive-effect'>{effect}</p>))

  return (
    <section className='expanded-strain-container'>
      <div className='strain-overview-left-box'>
        <h2>{weedStore.selectedStrain.name}</h2>
        <p className='strain-type-tag'>{weedStore.selectedStrain.race}</p>
        <img
          src="/assets/Cannabis1.jpeg"
          alt="cannabis image"
          className="cannabis-img"
        />
        <p className='strain-details'>Flavor Profile: {weedStore.selectedStrain.flavors.join(', ')}</p>
        <p className='strain-details'>Helps With: {weedStore.selectedStrain.effects.medical.join(', ')}</p>
      </div>
      <div className='strain-overview-middle-box'>
        <h2 className='description-header'>Description</h2>
        <p className='description-content'>a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing Blueberry with Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. </p>
        <div className='effects-box'>
          <div className='effects-column'>
            <img className='effect-img' src="/assets/Happy.svg"></img>
            {posEffects}
          </div>
          <div className='effects-column'>
            <img className='effect-img' src="/assets/Sad.svg"></img>
            {negEffects}
          </div>
        </div>
      </div>
      <div className='strain-overview-right-box'>
      <Link to='/home'>
        <button className='back-button'>Back</button>
      </Link>
        <button className='favorite-strain-button' onClick={() => weedStore.setFavorite()}>
        <p className='favorite-text'>Favorite</p>
          <img className="favorite-button-img-exapanded-card"
            src={weedStore.selectedStrain.favorite ? '/assets/favorite-yes.png' : '/assets/favorite-nope.png'}
            alt={weedStore.selectedStrain.favorite  ? 'favorited strain image' : 'unfavorited strain image'}
          />
          </button>
      </div>
    </section>
  )
})
export default ExpandedCard;
