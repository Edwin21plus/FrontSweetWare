import React from "react";
import ProductsList from "../Lists/ProductsList";
import BtnCreate from "../components/BtnCreate";

const Products = () => {
  return (
    <>
      <BtnCreate text={"Producto"}/>
      <div className="products">
        <ProductsList />
      </div>
    </>
  );
};

export default Products;
