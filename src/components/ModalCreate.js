import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCreate = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Crear {props.text}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="box-margin">
        Ingresa los siguientes datos:
        {props.text == "Producto" ? (
          <>
            <div class="field ">
              <input
                type="text"
                placeholder=" "
                required
                autoComplete="off"
                className="myInput"
              />
              <label for="Nombre" className="label-wrapper ">
                <span className="label-text">Nombre</span>
              </label>
            </div>
            <div class="field">
              <input type="TEXT" placeholder=" " required className="myInput" />
              <label for="" className="label-wrapper">
                <span className="label-text">Precio</span>
              </label>
            </div>
          </>
        ) : (
          <>
            <div class="field">
              <input type="text" placeholder=" " required className="myInput" />
              <label for="" className="label-wrapper">
                <span className="label-text">Nombre</span>
              </label>
            </div>
            {props.text == "Empleado" ? (
              <div class="field">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className="myInput"
                />
                <label for="" className="label-wrapper">
                  <span className="label-text">Rol</span>
                </label>
              </div>
            ) : null}
            <div class="field">
              <input type="text" placeholder=" " required className="myInput" />
              <label for="" className="label-wrapper">
                <span className="label-text">Direccion</span>
              </label>
            </div>
            <div class="field">
              <input
                type="email"
                placeholder=" "
                required
                className="myInput"
              />
              <label for="" className="label-wrapper">
                <span className="label-text">Email</span>
              </label>
            </div>
            <div class="field">
              <input type="text" placeholder=" " required className="myInput" />
              <label for="" className="label-wrapper">
                <span className="label-text">Telefono</span>
              </label>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreate;
