import React, { useContext } from "react";
import "./CategoryCards.css";
import { WeedStoreContext } from "../../WeedStore";
import { Link } from "react-router-dom";



const CategoryCards = () => {
  const weedStore = useContext(WeedStoreContext);
  const displayCards = weedStore.homePageCategories.map((category) => (
    <Link key={category} to={`${category.toLowerCase()}`}>
      <div
        key={category}
        className="category-button"
        onClick={(e) => weedStore.updateFilterByEffect(e.target.innerText)}
      >
        <h2 className="category-title">{category}</h2>
      </div>
    </Link>
  ));

  return (
    <section className="category-cards">
      {displayCards}
      <div className='towlie'>
        <img
        src="/assets/towelie-welcome.png"
        alt="South Park's Towelie dressed as a wizard"
      /> 
      </div>
    </section>
  );
}

export default CategoryCards;
