import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import "../css/BtnCreate.css";
import ModalCreate from "./ModalCreate";

function BtnCreate(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const create = () => {};

  return (
    <>
      <div className="container">
        <div className="row justify-content-end AgregarProductoButton-container">
          <div className="col-sm-6  col-md-6 col-lg-3 col-xl-2">
            <Button className="AgregarProductoButton" onClick={() => setModalShow(true)}>
              <AiOutlineAppstoreAdd className="AgregarProductoButton-icon" />
              Agregar {props.text}
            </Button>
          </div>
        </div>
      </div>
      <ModalCreate
        text={props.text}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BtnCreate;
