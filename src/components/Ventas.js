import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../css/Ventas.css";

function Ventas() {
  const [cliente, setCliente] = useState("");
  const [total, setTotal] = useState(0);
  const [productos, setProductos] = useState({
    pasteles: 0,
    donas: 0,
    cupcakes: 0,
    galletas: 0,
  });

  const calcularTotal = () => {
    const total =
      Object.values(productos).reduce((a, b) => a + b) * 5 +
      productos.pasteles * 50 +
      productos.cupcakes * 25;
    setMostrarResumen(true);
    setTotal(total);
  };

  const handleClienteChange = (event) => {
    setCliente(event.target.value);
  };

  const handleProductosChange = (event) => {
    const { name, value } = event.target;
    setProductos({
      ...productos,
      [name]: parseInt(value),
    });
  };

  const [mostrarResumen, setMostrarResumen] = useState(false);

  return (
    <Card className="ventas-card">
      <Card.Header className="ventas-header">Ventas</Card.Header>
      <Card.Body>
        {mostrarResumen ? (
          <>
            <h3>Resumen de venta:</h3>
            <p>Cliente: {cliente}</p>
            <ul className="ventas-productos">
              {Object.entries(productos).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
            <p className="ventas-total">Total: ${total}</p>
          </>
        ) : (
          <Form>
            <div class="field">
              <input
                type="text"
                placeholder=" "
                required
                className="myInput"
                onChange={handleClienteChange}
              />
              <label for="" className="label-wrapper">
                <span className="label-text">Cliente</span>
              </label>
            </div>
            {Object.entries(productos).map(([key, value]) => (
              /*<div class="field">
                <input
                  type="number"
                  className="myInput"
                  name={key}
                  placeholder=" "
                  value={value}
                  onChange={handleProductosChange}
                />
                <label for="" className="label-wrapper">
                  <span className="label-text">{key}</span>
                </label>
              </div>*/
              <Form.Group key={key} controlId={key} className="form-group">
                <Form.Label className="label">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Form.Label>
                <Form.Control
                  className="ventas-input"
                  type="number"
                  name={key}
                  min="0"
                  value={value}
                  onChange={handleProductosChange}
                />
              </Form.Group>
            ))}
            <div className="btnCalculate-container">
              <button className="btnCalculate" onClick={calcularTotal}>
                Calcular total
              </button>
            </div>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

export default Ventas;
