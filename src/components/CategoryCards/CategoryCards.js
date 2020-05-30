import React, { useContext } from "react";
import "./CategoryCards.css";
import { WeedStoreContext } from "../../WeedStore";
import { Link } from "react-router-dom";



const CategoryCards = () => {
  const weedStore = useContext(WeedStoreContext);
  const displayCards = weedStore.homePageCategories.map((category) => (
    <Link to={`/${category.toLowerCase()}`}>
      <div className="category-button">
        <h2 className="category-title">{category}</h2>
      </div>
    </Link>
  ));

  return (
    <section className="category-cards">
      {displayCards}
    </section>
  );
}

export default CategoryCards;
