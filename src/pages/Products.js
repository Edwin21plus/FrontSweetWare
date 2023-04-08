import React from "react";
import Cards from "../Lists/ProductsList";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-end AgregarProductoButton-container">
          <div className="col-sm-6  col-md-6 col-lg-3 col-xl-2">
            <button className="AgregarProductoButton">
              <AiOutlineAppstoreAdd className="AgregarProductoButton-icon" />
              Agregar producto
            </button>
          </div>
        </div>
      </div>
      <div className="products">
        <Cards></Cards>
      </div>
    </>
  );
};

export default Products;
