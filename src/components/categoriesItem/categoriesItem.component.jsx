// import React, { useEffect, useState } from "react";
import "./categoriesItem.styles.scss";
import data from "../../assets/db.json";

const CategoriesItem = (props) => {
  const category = props.category;
  const productList = data.products;
  let img = "";
  productList.map((product) => {
    if (product.category === category) {
      img = product.thumbnail;
    }
  });
  return (
    <div className="category-item">
      <img src={img} alt="" className="category-img" />
      <div className="category-content">
        <p className="category-name">{category}</p>
        <button className="category-btn">Buy Now ➡️</button>
      </div>
    </div>
  );
};

export default CategoriesItem;
