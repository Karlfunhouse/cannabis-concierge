import React, { useContext } from "react";
import './ExpandedCard.css'
import { WeedStoreContext } from '../../WeedStore'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

const ExpandedCard = observer(() => {
  const weedStore = useContext(WeedStoreContext)
  console.log(weedStore.selectedStrain);
  
  const negEffects = weedStore.selectedStrain.effects.negative
    .map(effect => (<p key={effect} className='strain-effect-tag positive-effect'>{effect}</p>))

  const posEffects = weedStore.selectedStrain.effects.positive.map((effect) => (
    <p key={effect} className="strain-effect-tag positive-effect">
      {effect}
    </p>
  ));

  return (
    <section className="expanded-strain-container">
      <div className="strain-overview-left-box">
        <h2>{weedStore.selectedStrain.name}</h2>
        <p className="strain-type-tag">{weedStore.selectedStrain.race}</p>
        <img
          src={weedStore.selectedStrain.img}
          alt="cannabis icon"
          className="cannabis-img"
        />
        <p className="strain-details">
          Flavor Profile: {weedStore.selectedStrain.flavors.join(", ")}
        </p>
        <p className="strain-details">
          Helps With: {weedStore.selectedStrain.effects.medical.join(", ")}
        </p>
      </div>
      <div className="strain-overview-middle-box">
        <h2 className="description-header">Description</h2>
        <p className="description-content">
          {weedStore.selectedStrain.description}
        </p>
        <div className="effects-box">
          <div className="effects-column">
            <img
              className="effect-img"
              alt="positive effects icon"
              src="/assets/Happy.svg"
            ></img>
            {posEffects}
          </div>
          <div className="effects-column">
            <img
              className="effect-img"
              alt="negative effects icon"
              src="/assets/Sad.svg"
            ></img>
            {negEffects}
          </div>
        </div>
      </div>
      <div className="strain-overview-right-box">
        <Link to="/home">
          <button className="back-button">Back</button>
        </Link>
        <button
          className="favorite-strain-button"
          onClick={() => weedStore.setFavorite()}
        >
          <p className="favorite-text">Favorite</p>
          <img
            className="favorite-button-img-exapanded-card"
            src={
              weedStore.selectedStrain.favorite
                ? "/assets/favorite-yes.png"
                : "/assets/favorite-nope.png"
            }
            alt={
              weedStore.selectedStrain.favorite
                ? "favorited strain image"
                : "unfavorited strain image"
            }
          />
        </button>
      </div>
    </section>
  );
})
export default ExpandedCard;
