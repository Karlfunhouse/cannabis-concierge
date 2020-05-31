import React, { useContext } from 'react'
import './CardsContainer.css'
import '../StrainCard/StrainCard.css'
import StrainCard from '../StrainCard/StrainCard'
import { WeedStoreContext } from '../../WeedStore';
import { observer } from 'mobx-react-lite';


const CardsContainer = observer( () => {
  const weedStore = useContext(WeedStoreContext)
  const weedSample = weedStore.currentStrains.slice(0, 12)
  // const displayCards = weedStore.currentStrains.map(strain => {
  //   const posEffects = strain.effects.positive.join(', ')
  //   const negEffects = strain.effects.negative.join(', ')
  //   console.log(posEffects)
  //   return(
  //     <div className="weed-card">
  //       <div className="card-top">
  //         <img src='/assets/weedbutler.png' alt='weed butler logo' className='icon'/>
  //         <div className="card-name-race">
  //           <h4 className="card-name">{strain.name}</h4>
  //           <div className = {`${strain.race}`} >
  //             <h4>{strain.race}</h4>
  //           </div>
  //         </div>
  //         <img className="favorite-button-icon"
  //           src={strain.favorite ? '/assets/favorite-yes.png' : '/assets/favorite-yep.png'} 
  //           alt={strain.favorite ? 'favorited strain image' : 'unfavorited strain image'}
  //         />
  //       </div>
  //       <div className="card-bottom">
  //         <h4 className="effects"><img src="/assets/plus.png" alt="plus" className="effect-indicator"/> {posEffects}</h4>
  //         <h4 className="effects"><img src="/assets/minus.png" alt="minus" className="effect-indicator"/>{strain.effects.negative.length > 0 ? negEffects : 'None'}</h4>
  //         <h4 className="effects"><img src="/assets/taste.png" alt="taste" className="effect-indicator"/>Flavors:{strain.flavors.join(', ')}</h4>
  //       </div>
  //     </div>
  //   )
  // })

  
  return (
    <section className="CardsContainer">
      <StrainCard />
      {console.log(weedStore.allStrains[0])}
    </section>
  );
})

export default CardsContainer
